import styles from "./Logo.module.css";
import ZBHouseLogo from "../../assets/zbHouseLogo.png"
export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={ZBHouseLogo} />
      <strong>Reservas</strong>
    </div>
  );
}