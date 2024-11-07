import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import React from "react";

export function Routes() {
  // @ts-ignore
  const { user } = useAuth();

  console.log(user)

  return (
    <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
