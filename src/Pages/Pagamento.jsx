import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import { Default } from "./Default";
import styles from "./Pagamento.module.css";

export function Pagamento() {
  return (
    <Default>
      <Main>
        <Form>
          <Inputs desc="Nome" type="text" />
          <Inputs desc="Documento" type="text" />
          <Inputs desc="Checkin" type="datetime-local" />
          <Inputs desc="Checkout" type="datetime-local" />
          <Inputs desc="Valor da Parcela" type="number" />
          <Inputs desc="Data do Pagamento" type="datetime-local" />
          <Inputs desc="Segunda Parcela" type="number" />
          <Inputs desc="Data do Pagamento" type="datetime-local" />
          <Inputs type="submit" />
        </Form>
      </Main>
    </Default>
  );
}
