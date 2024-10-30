import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Title(props){
  return(
    <div className={styles.title}>
        <strong>{props.nome}</strong>
        <span>{props.valor}</span>
      </div>
  )
}

export function Line(props) {
  return (
    <li className={styles.line}>
      <span className="material-icons">{props.icon}</span> <h4>{props.item}</h4>
    </li>
  );
}

function Button(props) {
  return (
    <Link className={styles.bar} to={props.page}>
      <span className="material-icons">{props.icon}</span>
      <button className={styles.button}>{props.button}</button>
    </Link>
  );
}

function List(props){
  return(
    <ul className={styles.list}>
      {props.children}
    </ul>
  )
}

export function Card(props) {
  return (
    <div className={styles.card}>
      <Title nome={props.nome} valor={props.valor}/>
      <List>
        {props.children}
      </List>
      <div className={styles.buttons}>
        {props.detail && <Button icon="zoom_in" button="Detalhar" page={props.detail}/>}
        {props.payment && <Button icon="paid" button="Pagar" page={props.payment}/>}
      </div>
    </div>
  );
}
