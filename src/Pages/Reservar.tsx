import { Default } from "./Default";
import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import {Reservas} from "../Utils/Interfaces"
import React, { FormEvent, useState } from "react";
import { api } from "../services/api";

export function Reservar() {
  const [nome, setNome] = useState<string>()
  const [documento, setDocumento] = useState<string>()
  const [checkin, setCheckin] = useState<Date>()
  const [checkout, setCheckout] = useState<Date>()
  const [dataPagamento, setDataPagamento] = useState<Date>()
  const [valor, setValor] = useState<number>()
  const [desconto, setDesconto] = useState<number>()

  async function handleCriarReserva(event: FormEvent){
    event.preventDefault();

    let valorPagamento = parseFloat(valor) || 0;
    let descontoValue = parseFloat(desconto) || 0;
    let descontoPercent = descontoValue > 0 ? descontoValue : 0;
  
    const pagamento = {
      data_pagamento: dataPagamento,
      valor_pagamento: valor
    };
  
    const reserva = {
      nome,
      documento,
      checkin,
      checkout,
      pagamentos: [pagamento],
      desconto: descontoPercent
    };
    console.log(reserva)
    await api.post("/reservas/", reserva)
  }
  return (
    <Default>
      <Main>
        <Form>
          <Inputs desc="Nome" type="text" required={true} onChange={e => setNome(e.target.value)}/>
          <Inputs desc="Documento" type="text" required={true} onChange={e => setDocumento(e.target.value)}/>
          <Inputs desc="Checkin" type="datetime-local" required={true} onChange={e => setCheckin(new Date(e.target.value))}/>
          <Inputs desc="Checkout" type="datetime-local" required={true} onChange={e => setCheckout(new Date(e.target.value))}/>
          <Inputs desc="Valor da Parcela" type="number" required={true} onChange={e => setValor(Number(e.target.value))}/>
          <Inputs desc="Data Pagamento" type="datetime-local" required={true} onChange={e => setDataPagamento(new Date(e.target.value))}/>
          <Inputs desc="Com desconto" type="checkbox" checkbox="checkbox" required={false}/>
          <Inputs desc="Desconto %" type="number" required={false} onChange={e => setDesconto(Number(e.target.value))}/>
          <Inputs type="submit" onClick={handleCriarReserva}/>
        </Form>
      </Main>
    </Default>
  );
}
