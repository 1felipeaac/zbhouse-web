import { Card, Line } from "../components/Main/Card";
import { Carrocel } from "../components/Main/Carrocel";
import { Main } from "../components/Main/Main";

import { Default } from "./Default";
export function DashBoard() {
  return (
    <Default>
      <Main>
        <Carrocel>
            <Card nome="Nome" valor="00,00" detail="/detalhar" payment="/pagamento">
                <Line icon="assignment_ind" item="Documento" />
                <Line icon="flight_land" item="Checkin" />
                <Line icon="flight_takeoff" item="Checkout" />
            </Card>
            <Card nome="Nome" valor="00,00" detail="/detalhar" payment="/pagamento">
                <Line icon="assignment_ind" item="Documento" />
                <Line icon="flight_land" item="Checkin" />
                <Line icon="flight_takeoff" item="Checkout" />
            </Card>
            <Card nome="Nome" valor="00,00" detail="/detalhar" payment="/pagamento">
                <Line icon="assignment_ind" item="Documento" />
                <Line icon="flight_land" item="Checkin" />
                <Line icon="flight_takeoff" item="Checkout" />
            </Card>
            <Card nome="Nome" valor="00,00" detail="/detalhar" payment="/pagamento">
                <Line icon="assignment_ind" item="Documento" />
                <Line icon="flight_land" item="Checkin" />
                <Line icon="flight_takeoff" item="Checkout" />
            </Card>
        </Carrocel>
      </Main>
    </Default>
  );
}
