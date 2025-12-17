Running the project (Windows PowerShell)

Overview
- Backend: FastAPI app in `backend/`. If no MongoDB credentials are provided, the app uses a local JSON fallback at `backend/data/status_checks.json`.
- Frontend: React app in `frontend/` (uses craco). Dev server runs on port 3000 by default.
- Extension: (none) — this project no longer includes an Electron extension.

Quick start (one-time setup)

1) Backend - create venv and install minimal dependencies
```powershell
# From repo root
"C:\Users\parih\AppData\Local\Programs\Python\Python311\python.exe" -m venv ".\backend\.venv"
".\backend\.venv\Scripts\python.exe" -m pip install --upgrade pip
".\backend\.venv\Scripts\python.exe" -m pip install -r ".\backend\requirements-lite.txt"
```

2) Frontend - install Node deps
```powershell
Set-Location -Path ".\frontend"
# Using npm (or use yarn if you prefer)
npm install --legacy-peer-deps
```

3) (no extensions)

Run servers

1) Backend (JSON fallback, no Mongo required)
```powershell
Set-Location -Path ".\backend"
# Ensure env vars are empty (so the JSON fallback is used)
$env:MONGO_URL=''; $env:DB_NAME=''
".\.venv\Scripts\python.exe" -m uvicorn backend.server:app --host 127.0.0.1 --port 8000
```
Visit: http://127.0.0.1:8000/api/

2) Frontend
```powershell
Set-Location -Path ".\frontend"
npm start
```
Visit: http://127.0.0.1:3000

3) (no extensions)

Notes and troubleshooting
- If you later want to use a real MongoDB, copy `backend/.env.sample` to `backend/.env` and set `MONGO_URL` and `DB_NAME`. Then install `motor` into the backend venv: `pip install motor`.
- If the frontend `npm install` fails with peer dependency issues, retry with `--legacy-peer-deps` (we used that successfully).
- The backend's JSON file is at `backend/data/status_checks.json` and will be created automatically when you POST to `/api/status`.

What I set up for you
- `backend/server.py` was updated to use a local JSON fallback when no Mongo credentials are present.
- `backend/.env.sample` and `backend/requirements-lite.txt` created.
- A Python virtualenv was created at `backend/.venv` and minimal backend packages installed.
- Frontend dependencies installed (used `--legacy-peer-deps` where needed).

If you want, I can:
- Add a small health-check script that verifies all three services are up.
- Re-enable Motor and install it if you later supply MongoDB details.
