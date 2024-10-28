import { Link } from "react-router-dom";
import { Form, Inputs } from "../components/Main/Form";
import { Main } from "../components/Main/Main";
import { Default } from "./Default";
import styles from "./Detalhar.module.css";

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
  return (
    <Default>
      <Main>
        <Voltar />
        <Form>
          <Inputs desc="Nome" type="text" />
          <Inputs desc="Documento" type="text" />
          <Inputs desc="Checkin" type="datetime-local" />
          <Inputs desc="Checkout" type="datetime-local" />
          <Inputs desc="Valor da Parcela" type="number" />
          <Inputs desc="Data do Pagamento" type="datetime-local" />
          <Inputs desc="Segunda Parcela" type="number" />
          <Inputs desc="Data do Pagamento" type="datetime-local" />
          <Inputs desc="Com desconto" type="checkbox" />
          <Inputs desc="Desconto %" type="number" />
          <Inputs desc="Valor da Reserva" type="number"/>
          <div></div>
        </Form>
      </Main>
    </Default>
  );
}
