// @ts-ignore
import styles from "./Detalhar.module.css";
import { Link } from "react-router-dom";
import { Main } from "../components/Main/Main";
import { Default } from "./Default";
import { Card, Line } from "../components/Main/Card";

import { useParams } from "react-router-dom";
import {api} from "../services/api"
import { useEffect, useState } from "react";
import { Reservas } from "../Utils/Interfaces";
import React from "react";
import { formatDate, verificaPagamento } from "../Utils/Utils";
import { icons, titulos } from "../Utils/Lists";

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
  const [reserva, setReserva] = useState<Reservas | null>(null)

  const params = useParams()

  useEffect(() => {
    async function consultaReservaPorId(){
      const {data} = await api.get(`/reservas/${params.id}`)

      setReserva(data)
    }

    consultaReservaPorId()
  },[])

  return (
    <Default>
      <Main>
        <Voltar />
        <div className={styles.detail}>


          {reserva && 
            <Card nome={reserva.nome} valor={reserva.valor_reserva}>
              <Line icon={icons[0]} item={`${titulos[0]} ${reserva.documento}`}/>
              <Line icon={icons[1]} item={`${titulos[1]} ${formatDate(reserva.checkin.toString())}`}/>
              <Line icon={icons[2]} item={`${titulos[2]} ${formatDate(reserva.checkout.toString())}`}/>
              <Line icon={icons[3]} item={`${titulos[3]} ${reserva.pagamentos[0].valor_pagamento}`}/>
              <Line icon={icons[4]} item={`${titulos[4]} ${verificaPagamento(reserva.pagamentos[0].data_pagamento)}`}/>
              <Line icon={icons[5]} item={`${titulos[5]} ${reserva.pagamentos.length > 1 ? reserva.pagamentos[1].valor_pagamento : 0}`}/>
              <Line icon={icons[6]} item={`${titulos[6]} ${ reserva.pagamentos.length > 1 ? verificaPagamento(reserva.pagamentos[1].data_pagamento): "Em Aberto"}`}/>
              <Line icon={icons[7]} item={`${titulos[7]} ${reserva.desconto > 0 ? "Sim": "Não"}`}/>
              <Line icon={icons[8]} item={`${titulos[8]} ${reserva.desconto.toFixed(1)}`}/>
          </Card>
          }
        </div>
      </Main>
    </Default>
  );
}
