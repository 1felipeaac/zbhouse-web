import styles from "./Form.module.css";

export function Inputs(props) {
  const inputClasses = props.checkbox
    ? `${styles.inputs} ${styles[props.checkbox]}`
    : styles.inputs;
  return (
    <div className={inputClasses}>
      <span>{props.desc}</span>
      <input type={props.type} />
    </div>
  );
}

export function Form(props) {
  return (
    <div className={styles.formPage}>
      <form className={styles.form}>{props.children}</form>
    </div>
  );
}
