import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import CounterProvider, { CounterContext } from "./context/CounterProvider";
import ThemeProvider from "./context/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CounterProvider>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </CounterProvider>
);
