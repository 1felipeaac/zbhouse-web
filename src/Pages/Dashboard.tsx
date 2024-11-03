import { Card, Line } from "../components/Main/Card";
import { Carrocel } from "../components/Main/Carrocel";
import { Main } from "../components/Main/Main";
import { useEffect, useState } from "react";
import {api} from "../services/api"
import { Default } from "./Default";

import React from "react";
import { Reservas } from "../Utils/Interfaces";
import { icons, titulos } from "../Utils/Lists";

const desconto = 0; // Defina o valor de desconto aqui

const select_icon =
  desconto > 0 ? "radio_button_checked" : "radio_button_unchecked";

const iconsDB = icons.slice(0,3);
const titulosDB = titulos.slice(0,3)

export const cards = [
  {
    id: 1,
    nome: "Felipe",
    valor: "1000,00",
    lines: [
      { icon: "assignment_ind", item: "123456" },
      { icon: "flight_land", item: "28/01/2024 10:30:01" },
      { icon: "flight_takeoff", item: "29/01/2024 10:30:00" },
      // { icon: "payments", item: "1500,00" },
      // { icon: "event", item: "29/01/2024 10:30:01" },
      // { icon: "payments", item: "1400,00" },
      // { icon: "event", item: "29/01/2024 10:30:02" },
      // { icon: select_icon, item: "Desconto" },
      // { icon: "percent", item: "29/01/2024 10:30:03" }
    ],
  },
  {
    id: 2,
    nome: "Manu",
    valor: "1500,00",
    lines: [
      { icon: "assignment_ind", item: "456789" },
      { icon: "flight_land", item: "22/01/2024 10:30:00" },
      { icon: "flight_takeoff", item: "24/01/2024 10:30:00" },
      // { icon: "payments", item: "1500,00" },
      // { icon: "event", item: "22/01/2024 10:30:02" },
      // { icon: "payments", item: "1000,00" },
      // { icon: "event", item: "24/01/2024 10:30:01" },
      // { icon: select_icon, item: "Desconto" },
      // { icon: "percent", item: "24/01/2024 10:30:03" }
    ],
  },
  {
    id: 3,
    nome: "Hayssa",
    valor: "1500,00",
    lines: [
      { icon: "assignment_ind", item: "789456" },
      { icon: "flight_land", item: "25/01/2024 10:30:00" },
      { icon: "flight_takeoff", item: "27/01/2024 10:30:03" },
      // { icon: "payments", item: "1500,00" },
      // { icon: "event", item: "25/01/2024 10:30:01" },
      // { icon: "payments", item: "1400,00" },
      // { icon: "event", item: "27/01/2024 10:30:02" },
      // { icon: select_icon, item: "Desconto" },
      // { icon: "percent", item: "27/01/2024 10:30:05" }
    ],
  },
  {
    id: 4,
    nome: "Bob",
    valor: "1000,00",
    lines: [
      { icon: "assignment_ind", item: "456123" },
      { icon: "flight_land", item: "30/01/2024 10:30:00" },
      { icon: "flight_takeoff", item: "31/01/2024 10:30:01" },
      // { icon: "payments", item: "1500,00" },
      // { icon: "event", item: "30/01/2024 10:30:02" },
      // { icon: "payments", item: "1000,00" },
      // { icon: "event", item: "31/01/2024 10:30:05" },
      // { icon: select_icon, item: "Desconto" },
      // { icon: "percent", item: "31/01/2024 10:30:06" }
    ],
  },
];

// export interface Reservas {
//   id: number;
//   nome: string;
//   documento: string;
//   valor_reserva: number;
//   desconto: number;
//   checkin: Date;
//   checkout: Date;
//   pagamentos: Pagamentos[];
// }

// interface Pagamentos {
//   data_pagamento: Date;
//   parcela: number;
//   valor_pagamento: number;
// }

export function DashBoard() {
  const [reservas, setReservas] = useState([]);
  const [card, setCard] = useState({});
  // const [lines, setLines] = useState([]);

  useEffect(() => {
    async function listarReservas() {
      const response = await api.get("/reservas/todos");
      const reservasData = response.data.content;
      setReservas(reservasData);
    }

    listarReservas();
  }, []);
  function handleClick(id:number) {
    console.log(`ID: ${id}`)
  }
  return (
    <Default>
      <Main>
        <Carrocel>
          {reservas &&
            reservas.map((reserva: Reservas, index: number) => {
              const lines = [
                reserva.documento,
                reserva.checkin,
                reserva.checkout,
              ];
              return (
                <Card
                  key={index}
                  id={reserva.id}
                  nome={reserva.nome}
                  valor={reserva.valor_reserva}
                  detail={`/detalhar/${reserva.id}`}
                  payment="/pagamento"
                  // onHandleClickDetail={() =>handleClick(reserva.id)}
                >
                  {lines &&
                    lines.map((line, index: number) => {
                      const icon = iconsDB[index];
                      const titulo = titulosDB[index];
                      return (<Line key={icon} icon={icon} item={`${titulo}: ${line}`} />);
                    })}
                </Card>
              );
            })}
        </Carrocel>
      </Main>
    </Default>
  );
}
