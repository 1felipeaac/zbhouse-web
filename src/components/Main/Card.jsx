import { Link, useLocation } from "react-router-dom";
import styles from "./Card.module.css";
import { useEffect } from "react";

function Title(props){
  return(
    <div className={styles.title}>
        <div>
          <strong style={{display:"none"}}>{props.id}</strong>
          <strong>{props.nome}</strong>
        </div>
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
  function handleClick() {
    // Acessando as props do Card
    console.log("Props do Card:", props.cardProps);

    // Chama a função onHandleClick passando as props do Card
    props.onHandleClick(props.cardProps);
  }
  return (
    <Link className={styles.bar} to={props.page} onClick={handleClick}>
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

export function Card({id, nome, valor,children, detail, payment, onHandleClick}) {

  const props = {id, nome, valor,children, detail, payment, onHandleClick}
  
  const location = useLocation();

  useEffect(() => {
    const card = document.getElementById("cardBox");
    
    if(location.pathname === "/detalhar"){
     card.classList.add(styles.cardWide)
    }else{
      card.classList.remove(styles.cardWide)
    }
    
  }, [location]);
  return (
    <div id="cardBox" className={styles.card}>
      <Title id={id} nome={nome} valor={valor}/>
      <List>
        {children}
      </List>
      <div className={styles.buttons}>
        {detail && <Button icon="zoom_in" button="Detalhar" page={detail} cardProps={props} onHandleClick={onHandleClick}/>}
        {payment && <Button icon="paid" button="Pagar" page={payment}/>}
      </div>
    </div>
  );
}
