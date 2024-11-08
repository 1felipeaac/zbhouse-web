// @ts-nocheck
import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState("");
  async function autenticar({ login, senha }) {
    try {
      const response = await api.post(
        "/login",
        { login, senha },
        { withCredentials: true }
      );

      const user = response.data

      // console.log(response)

      localStorage.setItem("@zbHouse:user", JSON.stringify(user));

      setData(user)

    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
      console.log(error);
    }
  }

  function desconectar() {
    localStorage.removeItem("@zbHouse:user");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@zbHouse:user");

    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ autenticar,  desconectar, user: data}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
