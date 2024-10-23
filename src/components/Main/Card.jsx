import styles from "./Card.module.css";

function Line(props) {
  return (
    <li className={styles.line}>
      <span className="material-icons">{props.icon}</span> <h4>{props.item}</h4>
    </li>
  );
}

function Button(props) {
  return (
    <div className={styles.bar}>
      <span className="material-icons">{props.icon}</span>
      <button className={styles.button}>{props.button}</button>
    </div>
  );
}

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <strong>Nome</strong>
        <span>00,00</span>
      </div>
      <ul className={styles.list}>
        <Line icon="assignment_ind" item="Documento" />
        <Line icon="flight_land" item="Checkin" />
        <Line icon="flight_takeoff" item="Checkout" />
      </ul>
      <div className={styles.buttons}>
        <Button icon="zoom_in" button="Detalhar"/>
        <Button icon="paid" button="Pagar"/>
      </div>
    </div>
  );
}
