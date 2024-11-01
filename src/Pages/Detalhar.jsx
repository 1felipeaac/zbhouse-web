import { Link } from "react-router-dom";
import { Form, Inputs } from "../components/Main/Form";
import { Main } from "../components/Main/Main";
import { Default } from "./Default";
import styles from "./Detalhar.module.css";
import { Card, Line } from "../components/Main/Card";

function Voltar() {
  return (
    <Link className={styles.voltar} to="/">
      <div className={styles.box}>
        <span className="material-icons">arrow_back</span>
        <strong>Voltar</strong>
      </div>
    </Link>
  );
}


export function Detalhar() {
  const desconto = 0
  const icon = desconto > 0 ? "radio_button_checked": "radio_button_unchecked"
  return (
    <Default>
      <Main>
        <Voltar />
        <div className={styles.detail}>
          {/* <Card nome={card.nome} valor={card.valor}>
            {card.lines.map((line, index)=>{
              return <Line key={index} icon={line.icon} item={`${line.item}`}/>
            })}
          </Card> */}
          <Card nome="Fulano" valor="2900,00">
            <Line icon="assignment_ind" item="Documento: 1234567" />
            <Line icon="flight_land" item="Checkin: 20/10/2024" />
            <Line icon="flight_takeoff" item="Checkout: 25/10/2024" />
            <Line icon="payments" item="Primeira Parcela: 1500,00" />
            <Line icon="event" item="Data Pagamento: 20/09/2024" />
            <Line icon="payments" item="Segunda Parcela: 1400,00" />
            <Line icon="event" item="Data Pagamento: 20/10/2024" />
            <Line icon= {icon} item="Desconto" />
            <Line icon="percent" item={desconto.toFixed(1)} />
          </Card>
        </div>
      </Main>
    </Default>
  );
}
