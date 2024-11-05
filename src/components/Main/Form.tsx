// @ts-ignore
import styles from "./Form.module.css";
import { useLocation } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import React from "react";

interface InputsProps{
  checkbox?: string,
  desc?: string,
  type: string,
  required?: boolean,
  disable?: boolean,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  onClick?: React.MouseEventHandler<HTMLInputElement>
  value?: string
}

export function Inputs({
  checkbox,
  desc,
  type,
  required,
  disable,
  onChange,
  onClick,
  value
}: InputsProps) {
  const inputClasses = checkbox
    ? `${styles.inputs} ${styles[checkbox]}`
    : styles.inputs;

  // function handleInputInvalid(event: React.ChangeEvent<HTMLInputElement>) {
  //   event.target.setCustomValidity("Campo obrigatório!");
  // }

  // function handleChangeValue(event: React.ChangeEvent<HTMLInputElement>) {
  //   event.target.setCustomValidity("");
  // }
  return (
    <div className={inputClasses}>
      <span>{desc}</span>
      <input
        type={type}
        required={required}
        disabled={disable}
        value={value}
        // onInvalid={handleInputInvalid}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}

interface FormProps{
  children: ReactNode[]
}

export function Form({ children }: FormProps) {
  const location = useLocation();

  useEffect(() => {
    const form = document.getElementById("displayForm");

    if(form){
      if (location.pathname === "/") {
        form.classList.add(styles.formLogin);
      } else {
        form.classList.remove(styles.formLogin);
      }
    }

  }, [location]);

  return (
    <div className={styles.formPage}>
      <form id="displayForm" className={styles.form}>
        {children}
      </form>
    </div>
  );
}
