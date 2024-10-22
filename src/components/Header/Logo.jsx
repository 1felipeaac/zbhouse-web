import styles from "./Logo.module.css";
export function Logo() {
  return (
    <div className={styles.logo}>
      <img src="../../assets/logo3.png" />
      <strong>Reservas</strong>
    </div>
  );
}
