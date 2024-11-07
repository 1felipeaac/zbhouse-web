import { useEffect } from "react";
// @ts-ignore
import styles from "./Itens.module.css";
import { Link, useLocation } from "react-router-dom";
import React from "react";

interface ItemsProps{
  desc: string,
  page:string,
  icon:string,
}

export function Items({desc, page, icon}: ItemsProps) {
  const location = useLocation();

  useEffect(() => {
    const linkPath = page === "/" ? page : page.replace(/\/$/, "");
    const currentPath =
      location.pathname === "/"
        ? location.pathname
        : location.pathname.replace(/\/$/, "");

    const button = document.getElementById(desc);

    if(button){

      if (linkPath === currentPath) {
        button.classList.add(styles.clicked);
      } else {
        button.classList.remove(styles.clicked);
      }
    }

  }, [location, page, desc]);
  return (
    <Link id={desc} className={styles.button} to={page}>
      <span className="material-icons">{icon}</span>
      <div>{desc}</div>
    </Link>
  );
}
