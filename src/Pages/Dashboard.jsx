import { Card } from "../components/Main/Card";
import { Carrocel } from "../components/Main/Carrocel";
import { Main } from "../components/Main/Main";

import { Default } from "./Default";
export function DashBoard() {
  return (
    <Default>
      <Main>
        <Carrocel>
          <Card detail="/detalhar" payment="/pagamento"/>
          <Card detail="/detalhar" payment="/pagamento"/>
          <Card detail="/detalhar" payment="/pagamento"/>
          <Card detail="/detalhar" payment="/pagamento"/>
        </Carrocel>
      </Main>
    </Default>
  );
}
