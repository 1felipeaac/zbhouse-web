import styles from "./Itens.module.css";

export function Items(props) {
  return (
    <div className={styles.button}>
      <span className="material-icons">{props.icon}</span>
      <button>{props.desc}</button>
    </div>
  );
}
