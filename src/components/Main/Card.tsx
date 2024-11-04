import { Link, useLocation } from "react-router-dom";
// @ts-ignore
import styles from "./Card.module.css";
import { ReactNode, useEffect } from "react";
import React from "react";

interface TitleProps{
  id?: number;
  nome: string;
  valor: number;
}
function Title({id, nome, valor}: TitleProps) {
  return (
    <div className={styles.title}>
      <div>
      {id !== undefined && <strong style={{ display: "none" }}>{id}</strong>}
        <strong>{nome}</strong>
      </div>
      <span>R$ {valor}</span>
    </div>
  );
}

interface LineProps{
  icon: string;
  item: string;
}

export function Line({icon, item}: LineProps) {
  return (
    <li className={styles.line}>
      <span className="material-icons">{icon}</span> <h4>{item}</h4>
    </li>
  );
}

interface ButtonProps {
  handleClick?: () => void,
  page:string,
  icon:string,
  button:string
  pago?:boolean
}

function Button({handleClick, page, icon, button, pago}:ButtonProps) {
 
  return (
    <Link className={`${styles.bar} ${pago ? styles.disabledLink : ''}`} to={page} onClick={handleClick} hidden={pago}>
      <span className="material-icons">{icon}</span>
      <button className={styles.button} disabled={pago}>{button}</button>
    </Link>
  );
}

interface ListProps{children: ReactNode}
function List({children}:ListProps) {
  return <ul className={styles.list}>{children}</ul>;
}

interface CardProps {
  id?: number;
  nome: string;
  valor: number;
  children?: ReactNode[];
  detail?: string;
  payment?: string;
  pago?: boolean
  onHandleClickDetail?: () => void;
}

export function Card({
  id,
  nome,
  valor,
  children,
  detail,
  payment,
  onHandleClickDetail,
  pago
}: CardProps) {
  

  const location = useLocation();

  useEffect(() => {
    const card = document.getElementById("cardBox");

    if (card) {
      if (location.pathname.includes("/detalhar")) {
        card.classList.add(styles.cardWide);
      } else {
        card.classList.remove(styles.cardWide);
      }
    }
  }, [location]);
  return (
    <div id="cardBox" className={styles.card}>
      <Title id={id} nome={nome} valor={valor} />
      <List>{children}</List>
      <div className={styles.buttons}>
        {detail && (
          <Button
            icon="zoom_in"
            button="Detalhar"
            page={detail}
            handleClick={onHandleClickDetail}
          />
        )}
        {payment && <Button icon="paid" button="Pagar" page={payment} pago={pago}/>}
      </div>
    </div>
  );
}
