import { Default } from "./Default";
import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";

export function Reservar() {
  return (
    <Default>
      <Main>
        <Form>
          <Inputs desc="Nome" type="text" required={true}/>
          <Inputs desc="Documento" type="text" required={true}/>
          <Inputs desc="Checkin" type="datetime-local" required={true}/>
          <Inputs desc="Checkout" type="datetime-local" required={true}/>
          <Inputs desc="Valor da Parcela" type="number" required={true}/>
          <Inputs desc="Data Pagamento" type="datetime-local" required={true}/>
          <Inputs desc="Com desconto" type="checkbox" checkbox="checkbox" required={false}/>
          <Inputs desc="Desconto %" type="number" required={false}/>
          <Inputs type="submit" />
        </Form>
      </Main>
    </Default>
  );
}
