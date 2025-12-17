from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import json
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure logging early so fallback warnings are visible
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection (with local JSON fallback when env vars are not set)
mongo_url = os.environ.get('MONGO_URL')
db_name = os.environ.get('DB_NAME')

client = None
USING_MONGO = False

if mongo_url and db_name:
    # Use Motor (async MongoDB client) when credentials are provided
    try:
        from motor.motor_asyncio import AsyncIOMotorClient
    except Exception:
        logger.error(
            "motor package is not installed but MONGO_URL was provided. Install 'motor' to use MongoDB."
        )
        raise

    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    USING_MONGO = True
else:
    # Fallback: simple local JSON-backed storage to allow running without MongoDB
    logger = logging.getLogger(__name__)
    logger.warning(
        "MONGO_URL and/or DB_NAME not set. Falling back to local JSON storage in backend/data/"
    )

    class FakeCollection:
        """A tiny async-friendly collection with insert_one and find(to_list).

        This persists data to a JSON file so the backend can run without MongoDB.
        """

        def __init__(self, path):
            self.path = path
            self._load()

        def _load(self):
            try:
                if os.path.exists(self.path):
                    with open(self.path, "r", encoding="utf-8") as f:
                        self._data = json.load(f)
                else:
                    self._data = []
            except Exception:
                self._data = []

        def _save(self):
            os.makedirs(os.path.dirname(self.path), exist_ok=True)
            with open(self.path, "w", encoding="utf-8") as f:
                json.dump(self._data, f, default=str, ensure_ascii=False, indent=2)

        async def insert_one(self, doc):
            # emulate pymongo's InsertOneResult minimally
            self._data.append(doc)
            self._save()

            class InsertOneResult:
                def __init__(self, inserted_id):
                    self.inserted_id = inserted_id

            return InsertOneResult(len(self._data) - 1)

        def find(self, *args, **kwargs):
            # Return an object with an async to_list(limit) method
            data = list(self._data)

            class Cursor:
                def __init__(self, data):
                    self._data = data

                async def to_list(self, length):
                    return self._data[:length]

            return Cursor(data)


    class FakeDB:
        def __init__(self, data_dir):
            self._dir = data_dir
            os.makedirs(self._dir, exist_ok=True)
            self.status_checks = FakeCollection(os.path.join(self._dir, "status_checks.json"))


    db = FakeDB(str(ROOT_DIR / "data"))

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    # Only close Motor client when it's actually used
    if USING_MONGO and client is not None:
        client.close()