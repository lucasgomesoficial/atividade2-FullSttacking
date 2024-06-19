import React from "react";
import ReactDOM from "react-dom/client";
import { Route } from "./routes/routes.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>
);
