import "sanitize.css/sanitize.css";
import "./styles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import { NotificationProvider } from "./lib/context/notification-ctx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>
);
