import { Default } from "./Default";
import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import {Reservas} from "../Utils/Interfaces"
import React, { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../services/api";

export function Reservar() {
  const [nome, setNome] = useState<string>()
  const [documento, setDocumento] = useState<string>()
  const [checkin, setCheckin] = useState<Date>()
  const [checkout, setCheckout] = useState<Date>()
  const [dataPagamento, setDataPagamento] = useState<Date>()
  const [valor, setValor] = useState<number>()
  const [desconto, setDesconto] = useState<number>()

  function handleOnChangeNome(event: ChangeEvent<HTMLInputElement>){
    const nome = (event.target as HTMLInputElement).value;
    setNome(nome)
  }
  function handleOnChangeDocumento(event: ChangeEvent<HTMLInputElement>){
    const doc = (event.target as HTMLInputElement).value;
    setDocumento(doc)
  }
  function handleOnChangeCheckin(event: ChangeEvent<HTMLInputElement>){
    const checkin = (event.target as HTMLInputElement).value;
    setCheckin(new Date(checkin))
  }
  function handleOnChangeCheckout(event: ChangeEvent<HTMLInputElement>){
    const checkout = (event.target as HTMLInputElement).value;
    setCheckout(new Date(checkout))
  }
  function handleOnChangeValorPrcela(event: ChangeEvent<HTMLInputElement>){
    const valor = (event.target as HTMLInputElement).value;
    setValor(Number(valor))
  }
  function handleOnChangeDataPagamento(event: ChangeEvent<HTMLInputElement>){
    const data = (event.target as HTMLInputElement).value;
    setDataPagamento(new Date(data))
  }
  function handleOnChangeDesconto(event: ChangeEvent<HTMLInputElement>){
    const desconto = (event.target as HTMLInputElement).value;
    setValor(Number(desconto))
  }

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
          <Inputs desc="Nome" type="text" required={true} onChange={handleOnChangeNome}/>
          <Inputs desc="Documento" type="text" required={true} onChange={handleOnChangeDocumento}/>
          <Inputs desc="Checkin" type="datetime-local" required={true} onChange={handleOnChangeCheckin}/>
          <Inputs desc="Checkout" type="datetime-local" required={true} onChange={handleOnChangeCheckout}/>
          <Inputs desc="Valor da Parcela" type="number" required={true} onChange={handleOnChangeValorPrcela}/>
          <Inputs desc="Data Pagamento" type="datetime-local" required={true} onChange={handleOnChangeDataPagamento}/>
          <Inputs desc="Com desconto" type="checkbox" checkbox="checkbox" required={false}/>
          <Inputs desc="Desconto %" type="number" required={false} onChange={handleOnChangeDesconto}/>
          <Inputs type="submit" onClick={handleCriarReserva}/>
        </Form>
      </Main>
    </Default>
  );
}
