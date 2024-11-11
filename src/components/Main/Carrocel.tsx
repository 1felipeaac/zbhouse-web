import React, { ReactNode } from "react";
//@ts-ignore
import styles from "./Carrocel.module.css";

interface CarrocelProps {
  children: ReactNode;
  voltar?: () => void;
  avancar?: () => void;
  pagina?: number
}
export function Carrocel({ children, voltar, avancar, pagina }: CarrocelProps) {
  return (
    <div className={styles.pagination}>
      <div className={styles.carrocel}>
        {children}
      </div>
      <div className={styles.control}>
        <button className="material-icons" onClick={voltar}>
          chevron_left
        </button>
        <span>{pagina}</span>
        <button className="material-icons" onClick={avancar}>
          chevron_right
        </button>
      </div>
    </div>
  );
}
