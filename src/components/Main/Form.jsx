import styles from "./Form.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function Inputs({
  checkbox,
  desc,
  type,
  required,
  disable,
  onChange,
  onClick,
}) {
  const inputClasses = checkbox
    ? `${styles.inputs} ${styles[checkbox]}`
    : styles.inputs;

  function handleInputInvalid() {
    event.target.setCustomValidity("Campo obrigatório!");
  }

  function handleChangeValue() {
    event.target.setCustomValidity("");
  }
  return (
    <div className={inputClasses}>
      <span>{desc}</span>
      <input
        type={type}
        required={required}
        disabled={disable}
        // onInvalid={handleInputInvalid}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}

export function Form({ children }) {
  const location = useLocation();

  useEffect(() => {
    const form = document.getElementById("displayForm");

    if (location.pathname === "/") {
      form.classList.add(styles.formLogin);
    } else {
      form.classList.remove(styles.formLogin);
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
