import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "/mockServiceWorker.js",
      },
    });
  } else {
    const { worker } = await import("./mocks/browser");
    await worker.start({
      serviceWorker: {
        url: "/hospital-julio-salazar-DFII/mockServiceWorker.js",
      },
      onUnhandledRequest: "bypass",
    });
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/hospital-julio-salazar-DFII">
      <App />
    </BrowserRouter>
  );
});
