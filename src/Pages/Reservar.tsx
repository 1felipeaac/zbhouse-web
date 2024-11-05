import { Default } from "./Default";
import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import {Reservas} from "../Utils/Interfaces"
import React, { FormEvent, useState } from "react";
import { api } from "../services/api";

export function Reservar() {
  const [nome, setNome] = useState<string>()
  const [documento, setDocumento] = useState<string>()
  const [checkin, setCheckin] = useState<string>()
  const [checkout, setCheckout] = useState<string>()
  const [dataPagamento, setDataPagamento] = useState<string>()
  const [valor, setValor] = useState<string>()
  const [desconto, setDesconto] = useState<string>()

  const checkinDate = checkin ? new Date(checkin) : undefined;
  const checkoutDate = checkout ? new Date(checkout) : undefined;
  const dataPagamentoDate = dataPagamento ? new Date(dataPagamento) : undefined;

  const reserva:Reservas ={
    nome: nome,
    documento: documento,
    checkin: checkinDate,
    checkout: checkoutDate,
    pagamentos: [
      {parcela: 1,
      data_pagamento: dataPagamentoDate,
      valor_pagamento: Number(valor), //
      },
    ],
    desconto: Number(desconto),

  }
  async function handleCriarReserva(event: FormEvent){
    event.preventDefault();
    await api.post("/reservas/", reserva, {withCredentials: true, headers: {'Content-Type': 'application/json'}})
    console.log(reserva)
  }
  return (
    <Default>
      <Main>
        <Form>
          <Inputs desc="Nome" type="text" required={true} onChange={e => setNome(e.target.value)}/>
          <Inputs desc="Documento" type="text" required={true} onChange={e => setDocumento(e.target.value)}/>
          <Inputs desc="Checkin" type="datetime-local" required={true} onChange={e => setCheckin(e.target.value)}/>
          <Inputs desc="Checkout" type="datetime-local" required={true} onChange={e => setCheckout(e.target.value)}/>
          <Inputs desc="Valor da Parcela" type="number" required={true} onChange={e => setValor(e.target.value)}/>
          <Inputs desc="Data Pagamento" type="datetime-local" required={true} onChange={e => setDataPagamento(e.target.value)}/>
          <Inputs desc="Com desconto" type="checkbox" checkbox="checkbox" required={false}/>
          <Inputs desc="Desconto %" type="number" required={false} onChange={e => setDesconto(e.target.value)}/>
          <Inputs type="submit" onClick={handleCriarReserva}/>
        </Form>
      </Main>
    </Default>
  );
}
