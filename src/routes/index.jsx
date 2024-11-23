import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/auth";
import React, { useEffect } from "react";

export function Routes() {
  const { user, desconectar } = useAuth();

  useEffect(() => {
 
    if(user === undefined){
      desconectar()
    }

  },[])



  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
