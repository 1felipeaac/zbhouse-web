import styles from "./Logo.module.css";
// import logo from "../../assets/logo3.png";

export function Logo() {
  const logo = "../../assets/logo3.png"
 
  return (
    <div className={styles.logo}>
      <img src={logo}/>
      <strong>Reservas</strong>
    </div>
  );
}
