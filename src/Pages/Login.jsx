// @ts-nocheck
import styles from "./Login.module.css";
import ZBHouseLogo from "../assets/zbHouseLogo.png";
import { Form, Inputs } from "../components/Main/Form";
import { useAuth } from "../hooks/auth";
import { useState } from "react";
import React from "react";

export function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const { autenticar } = useAuth();

  function handleLogin() {
    event.preventDefault();
    autenticar({ login, senha });
  }
  return (
    <div className={styles.wrapperLogin}>
      <div className={styles.asideImg}>
        <img src={ZBHouseLogo} alt="" />
      </div>
      <div className={styles.formLoginPage}>
        <h3>Login</h3>
        <Form>
          <Inputs
            desc="Usuario"
            type="text"
            required={true}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Inputs
            desc="Senha"
            type="password"
            required={true}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Inputs type="submit" onClick={handleLogin} />
        </Form>
      </div>
    </div>
  );
}
