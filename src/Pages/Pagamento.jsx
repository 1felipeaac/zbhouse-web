import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import { Default } from "./Default";
import styles from "./Pagamento.module.css";

export function Pagamento() {
  return (
    <Default>
      <Main>
        <Form>
          <Inputs desc="Nome" type="text" disable={true}/>
          <Inputs desc="Documento" type="text" disable={true}/>
          <Inputs desc="Checkin" type="datetime-local" disable={true}/>
          <Inputs desc="Checkout" type="datetime-local" disable={true}/>
          <Inputs desc="Valor da Parcela" type="number" disable={true}/>
          <Inputs desc="Data do Pagamento" type="datetime-local" disable={true}/>
          <Inputs desc="Segunda Parcela" type="number" required={true}/>
          <Inputs desc="Data do Pagamento" type="datetime-local" required={true}/>
          <Inputs type="submit" />
        </Form>
      </Main>
    </Default>
  );
}
