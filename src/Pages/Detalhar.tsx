// @ts-ignore
import styles from "./Detalhar.module.css";
import { Link } from "react-router-dom";
import { Main } from "../components/Main/Main";
import { Default } from "./Default";
import { Card, Line } from "../components/Main/Card";

import { useParams } from "react-router-dom";
import {api} from "../services/api"
import { useEffect, useState } from "react";
import { Pagamentos, Reservas } from "../Utils/Interfaces";
import React from "react";
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
  const [lines, setLines] = useState<string[]>([])
  const [primeiraParcela, setPrimeiraParcela] = useState<Pagamentos | null>(null)
  const [segundaParcela, setSegundaParcela] = useState<Pagamentos | null>(null)

  const params = useParams()

  useEffect(() => {
    async function consultaReservaPorId(){
      const {data} = await api.get(`/reservas/${params.id}`)

      setReserva(data)
    }

    consultaReservaPorId()
  },[])

  useEffect(() => {
    if (reserva != null){

      if(reserva.pagamentos.length === 1){
        setSegundaParcela({data_pagamento: reserva.checkout, parcela: 2, valor_pagamento: 0})
      }

      reserva.pagamentos.map((pagamento, index) => {
        if (pagamento.parcela == 1) {
          setPrimeiraParcela(pagamento);
        } else if (index === 1) {
          setSegundaParcela(pagamento);
        }

      })
      const verificaDesconto = reserva.desconto > 0 ? "Sim": "Não"
      if (primeiraParcela && segundaParcela){
        setLines([
          reserva.documento, 
          reserva.checkin.toString(), 
          reserva.checkout.toString(), 
          primeiraParcela.valor_pagamento.toFixed(2),
          primeiraParcela.data_pagamento.toString(),
          segundaParcela.valor_pagamento.toFixed(2),
          segundaParcela.data_pagamento.toString(),
          verificaDesconto,
          reserva.desconto.toFixed(0)
        ])
      }
    }
  },[reserva])

  

  return (
    <Default>
      <Main>
        <Voltar />
        <div className={styles.detail}>

          {reserva && <Card nome={reserva.nome} valor={reserva.valor_reserva}>
            {lines.map((line, index) =>{
              let icon = icons[index]
              const titulo = titulos[index]
              return <Line key={titulo} icon={icon} item={`${titulo} ${line}`}/>
            })}
          </Card>}
        </div>
      </Main>
    </Default>
  );
}
