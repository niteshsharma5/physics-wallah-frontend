import "./App.css";
import React, { useEffect } from "react";
import AppRouter from "./router/AppRouter";
require("dotenv").config();

function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
}

export default App;
