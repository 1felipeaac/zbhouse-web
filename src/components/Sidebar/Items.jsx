import styles from "./Itens.module.css";

export function Items(props) {
  return (
    <button className={styles.button}>
      <span className="material-icons">{props.icon}</span>
      <div>{props.desc}</div>
    </button>
  );
}
