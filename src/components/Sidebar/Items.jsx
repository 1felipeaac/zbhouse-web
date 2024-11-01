import { useEffect } from "react";
import styles from "./Itens.module.css";
import { Link, useLocation } from "react-router-dom";

export function Items({desc, page, icon}) {
  const location = useLocation();

  useEffect(() => {
    const linkPath = page === "/" ? page : page.replace(/\/$/, "");
    const currentPath =
      location.pathname === "/"
        ? location.pathname
        : location.pathname.replace(/\/$/, "");

    const button = document.getElementById(desc);

    if (linkPath === currentPath) {
      button.classList.add(styles.clicked);
    } else {
      button.classList.remove(styles.clicked);
    }
  }, [location, page, desc]);
  return (
    <Link id={desc} className={styles.button} to={page}>
      <span className="material-icons">{icon}</span>
      <div>{desc}</div>
    </Link>
  );
}
