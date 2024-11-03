import { Link } from "react-router-dom";
import { Form, Inputs } from "../components/Main/Form";
import { Main } from "../components/Main/Main";
import { Default } from "./Default";
import styles from "./Detalhar.module.css";
import { Card, Line } from "../components/Main/Card";

import { useParams } from "react-router-dom";
import {api} from "../services/api"
import { useEffect, useState } from "react";
import { Reservas } from "../Utils/Interfaces";
import React from "react";

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
  const [reserva, setReserva] = useState<Reservas | {}>({})
  const desconto = 0
  const icon = desconto > 0 ? "radio_button_checked": "radio_button_unchecked"

  const params = useParams()

  useEffect(() => {
    async function consultaReservaPorId(){
      const {data} = await api.get(`/reservas/${params.id}`)

      setReserva(data)

      // console.log(data)
    }

    consultaReservaPorId()
  },[])

  

  return (
    <Default>
      <Main>
        <Voltar />
        <div className={styles.detail}>

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
