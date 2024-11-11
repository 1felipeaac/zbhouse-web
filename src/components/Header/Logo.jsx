// @ts-nocheck
import styles from "./Logo.module.css";
import ZBHouseLogo from "../../assets/zbHouseLogo.png"
import React from "react";
export function Logo() {
  return (
    <div id="logo" className={styles.logo}>
      <img src={ZBHouseLogo} />
      <strong id="reservas">Reservas</strong>
    </div>
  );
}