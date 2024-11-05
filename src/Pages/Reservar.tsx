import { Default } from "./Default";
import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import {Reservas} from "../Utils/Interfaces"
import React, { FormEvent, useState } from "react";

export function Reservar() {
  const [nome, setNome] = useState<string>()
  const [documento, setDocumento] = useState()
  const [checkin, setCheckin] = useState()
  const [checkout, setCheckout] = useState()
  const [dataPagamento, setDataPagamento] = useState()
  const [valor, setValor] = useState()
  const [desconto, setDesconto] = useState()

  // const reserva:Reservas ={
  //   nome: nome,
  //   documento: documento,
  //   checkin: checkin,
  //   checkout: checkout,
  //   pagamentos: [
  //     {parcela: 1,
  //     data_pagamento: dataPagamento,
  //     valor_pagamento: valor, //
  //     },
  //   ],
  //   desconto: desconto,

  // }
  function handleCriarReserva(event: FormEvent){
    event.preventDefault();
    console.log(nome)
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
