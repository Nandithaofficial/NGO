import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
// @ts-ignore: allow CSS side-effect import without type declarations
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);