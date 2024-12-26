// @ts-nocheck
import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

interface UserData{
  user: string;
}

interface AuthContextType{
  autenticar: (credentials: { login: string, senha: string }) => void;
  desconectar: () => void;
  user: UserData;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }) {
  const [data, setData] = useState<UserData>({});
  async function autenticar({ login, senha }: { login: string, senha: string }) {
    try {
      const response = await api.post(
        "/login",
        { login, senha },
        { withCredentials: true }
      );

      const {user} = response.data

      localStorage.setItem("@zbHouse:user", JSON.stringify(user));

      setData({user})

    } catch (error) {
      if (error.response) {
        alert(error.response.data)
      }
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
    <AuthContext.Provider 
      value={{ 
        autenticar, 
        desconectar, 
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error("Sem contexto")
  }
  return context;
}
