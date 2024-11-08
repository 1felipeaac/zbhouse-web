import { Default } from "./Default";
import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { CustomAlert } from "../components/Main/CustomAlert";
import { FieldError } from "../Utils/Interfaces";

export function Reservar() {
  const [nome, setNome] = useState<string>()
  const [documento, setDocumento] = useState<string>()
  const [checkin, setCheckin] = useState<Date>()
  const [checkout, setCheckout] = useState<Date>()
  const [dataPagamento, setDataPagamento] = useState<Date>()
  const [valor, setValor] = useState<number>()
  const [desconto, setDesconto] = useState<number>()
  const [customAlert, setCustonAlert] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string[] | string>([]);
  const [comDesconto, setComDesconto] = useState(false);
  
  

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
    setDesconto(Number(desconto))
  }
  function handleOnChange(){
    setComDesconto(!comDesconto)
  }
  async function handleCriarReserva(event: FormEvent){
    event.preventDefault();

    try {
      let descontoValue = desconto || 0;
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
      
      await api.post("/reservas/", reserva)
      setMessageAlert("Reserva feita com sucesso")
    } catch (error) {
      setCustonAlert(true);
      const erro = error as AxiosError;
      let listError: string[] = [];
      if (erro) {
        if (erro.response?.data) {
          if (Array.isArray(erro.response.data)) {
              erro.response.data.map((field: FieldError) => {
                const errorString = `${field.field.toLocaleUpperCase()}: ${field.message}`
                listError.push(errorString)
              
            });
            setMessageAlert(listError)
          } else{
            setMessageAlert([erro.response.data as string])
            
          }
        }
      }
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setCustonAlert(false);
      setMessageAlert("");
    }, 5500);
  
    return () => clearTimeout(timer);
  }, [messageAlert]);
  return (
    <Default>
      <Main>
        {messageAlert.length > 0 && (
          <CustomAlert customAlert={customAlert} message={messageAlert} />
        )}
        <Form>
          <Inputs desc="Nome" type="text" required={true} onChange={handleOnChangeNome}/>
          <Inputs desc="Documento" type="text" required={true} onChange={handleOnChangeDocumento}/>
          <Inputs desc="Checkin" type="datetime-local" required={true} onChange={handleOnChangeCheckin}/>
          <Inputs desc="Checkout" type="datetime-local" required={true} onChange={handleOnChangeCheckout}/>
          <Inputs desc="Valor da Parcela" type="number" required={true} onChange={handleOnChangeValorPrcela}/>
          <Inputs desc="Data Pagamento" type="datetime-local" required={true} onChange={handleOnChangeDataPagamento}/>
          <Inputs desc="Com desconto" type="checkbox" checkbox="checkbox" required={false} onChecked={comDesconto} onChange={handleOnChange} />
          <Inputs desc="Desconto %" type="number" required={false} onChange={handleOnChangeDesconto} disable={!comDesconto}/>
          <Inputs type="submit" onClick={handleCriarReserva}/>
        </Form>
      </Main>
    </Default>
  );
}
