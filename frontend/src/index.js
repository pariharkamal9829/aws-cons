import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import App from "@/App";
import ErrorBoundary from "./ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);

function showFatalError(info) {
  const rootEl = document.getElementById("root");
  if (!rootEl) return;
  rootEl.innerHTML = `
    <div style="padding:24px;font-family:Arial,Helvetica,sans-serif">
      <h1>Something went wrong</h1>
      <pre style="white-space:pre-wrap">${String(info)}</pre>
      <button id="reloadBtn">Reload</button>
    </div>
  `;
  const btn = document.getElementById("reloadBtn");
  if (btn) btn.addEventListener("click", () => location.reload());
  console.error("Fatal error:", info);
}

window.addEventListener("error", (event) => {
  showFatalError((event && event.message) || String(event));
});

window.addEventListener("unhandledrejection", (event) => {
  const reason = event && event.reason ? event.reason : event;
  showFatalError("Unhandled promise rejection: " + (reason && reason.message ? reason.message : String(reason)));
});
