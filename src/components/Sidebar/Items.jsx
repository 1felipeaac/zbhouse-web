import { useEffect } from "react";
import styles from "./Itens.module.css";
import { Link, useLocation } from "react-router-dom";

export function Items(props) {
  const location = useLocation();

  useEffect(() => {
    const linkPath = props.page === "/" ? props.page : props.page.replace(/\/$/, "");
    const currentPath =
      location.pathname === "/"
        ? location.pathname
        : location.pathname.replace(/\/$/, "");

    const button = document.getElementById(props.desc);

    if (linkPath === currentPath) {
      button.classList.add(styles.clicked);
    } else {
      button.classList.remove(styles.clicked);
    }
  }, [location, props.page, props.desc]);
  return (
    <Link id={props.desc} className={styles.button} to={props.page}>
      <span className="material-icons">{props.icon}</span>
      <div>{props.desc}</div>
    </Link>
  );
}
