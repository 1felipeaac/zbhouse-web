import React, { ReactNode } from "react";
import styles from "./Carrocel.module.css";

interface CarrocelProps {
  children: ReactNode;
}
export function Carrocel({ children }: CarrocelProps) {
  return (
      <div className={styles.carrocel}>{children}</div>
  );
}
