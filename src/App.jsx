import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { Routes } from "./routes";
import { AuthProvider } from "./hooks/auth";
import React from "react";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
