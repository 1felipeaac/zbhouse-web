import { Card, Line } from "../components/Main/Card";
import { Carrocel } from "../components/Main/Carrocel";
import { Main } from "../components/Main/Main";

import { Default } from "./Default";

const desconto = 0; // Defina o valor de desconto aqui

const select_icon = desconto > 0 ? "radio_button_checked" : "radio_button_unchecked";

export const cards = [
  {
    id:1,
    nome: "Felipe",
    valor: "1000,00",
    lines:[
      { icon: "assignment_ind", item: "123456" },
      { icon: "flight_land", item: "28/01/2024 10:30:01" },
      { icon: "flight_takeoff", item: "29/01/2024 10:30:00" },
      { icon: "payments", item: "1500,00" },
      { icon: "event", item: "29/01/2024 10:30:01" },
      { icon: "payments", item: "1400,00" },
      { icon: "event", item: "29/01/2024 10:30:02" },
      { icon: select_icon, item: "Desconto" },
      { icon: "percent", item: "29/01/2024 10:30:03" }
    ]

  },
  {
    id:2,
    nome: "Manu",
    valor: "1500,00",
    lines:[
      {icon: "assignment_ind", item: "456789"},
      {icon: "flight_land",item: "22/01/2024 10:30:00"},
      {icon: "flight_takeoff",item: "24/01/2024 10:30:00"},
      { icon: "payments", item: "1500,00" },
      { icon: "event", item: "22/01/2024 10:30:02" },
      { icon: "payments", item: "1000,00" },
      { icon: "event", item: "24/01/2024 10:30:01" },
      { icon: select_icon, item: "Desconto" },
      { icon: "percent", item: "24/01/2024 10:30:03" }
    ]

  },{
    id:3,
    nome: "Hayssa",
    valor: "1500,00",
    lines:[
      {icon: "assignment_ind", item: "789456"},
      {icon: "flight_land",item: "25/01/2024 10:30:00"},
      {icon: "flight_takeoff",item: "27/01/2024 10:30:03"},
      { icon: "payments", item: "1500,00" },
      { icon: "event", item: "25/01/2024 10:30:01" },
      { icon: "payments", item: "1400,00" },
      { icon: "event", item: "27/01/2024 10:30:02" },
      { icon: select_icon, item: "Desconto" },
      { icon: "percent", item: "27/01/2024 10:30:05" }
    ]

  },{
    id:4,
    nome: "Bob",
    valor: "1000,00",
    lines:[
      {icon: "assignment_ind", item: "456123"},
      {icon: "flight_land",item: "30/01/2024 10:30:00"},
      {icon: "flight_takeoff",item: "31/01/2024 10:30:01"},
      { icon: "payments", item: "1500,00" },
      { icon: "event", item: "30/01/2024 10:30:02" },
      { icon: "payments", item: "1000,00" },
      { icon: "event", item: "31/01/2024 10:30:05" },
      { icon: select_icon, item: "Desconto" },
      { icon: "percent", item: "31/01/2024 10:30:06" }
    ]

  },
]

export function DashBoard() {
  function handleClick(cardProps) {
    console.log("Props do Card:", cardProps);
  }
  return (
    <Default>
      <Main>
        <Carrocel>

          {cards.map(card => {
            return <Card key={card.id} id={card.id} nome={card.nome} valor={card.valor} detail="/detalhar" payment="/pagamento" onHandleClick={handleClick}>
              {card.lines.map((line) => {
                  return <Line key={line.item} icon={line.icon} item={line.item} />;
                })}
            </Card>
          })}
        </Carrocel>
      </Main>
    </Default>
  );
}
