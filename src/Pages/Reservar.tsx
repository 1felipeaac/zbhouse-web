import { Default } from "./Default";
import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { CustomAlert } from "../components/Main/CustomAlert";
import { handlerCustomError } from "../Utils/Utils";
import { useNavigate } from "react-router-dom";

export function Reservar() {
  const [nome, setNome] = useState<string>()
  const [documento, setDocumento] = useState<string>()
  const [checkin, setCheckin] = useState<Date>()
  const [checkout, setCheckout] = useState<Date>()
  const [dataPagamento, setDataPagamento] = useState<Date>()
  const [valor, setValor] = useState<number>()
  const [desconto, setDesconto] = useState<number>()
  const [customAlert, setCustonAlert] = useState<boolean>(false);
  const [salvo, setSalvo] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string[] | string>([]);
  const [comDesconto, setComDesconto] = useState(false);
  
  const navigate = useNavigate()

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
      setSalvo(!salvo)
    } catch (error) {
      const erro = error as AxiosError;
      setSalvo(salvo)
      handlerCustomError(erro, setCustonAlert, setMessageAlert)
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setCustonAlert(false);
      setMessageAlert("");
      if(salvo == true){
        navigate("/")
      }
    }, 5500);
  
    return () => clearTimeout(timer);
  }, [messageAlert]);
  return (
    <Default navBar={{placeholder:"Busca por data. dd/mm/aaaa"}}>
      <Main>
        {messageAlert.length > 0 && (
          <CustomAlert customAlert={customAlert} message={messageAlert} />
        )}
        <Form>
          <Inputs 
            desc="Nome" 
            type="text" 
            required={true} 
            onChange={handleOnChangeNome}
          />
          <Inputs 
            desc="Documento" 
            type="text" 
            required={true} 
            onChange={handleOnChangeDocumento}
          />
          <Inputs 
            desc="Checkin" 
            type="date" 
            required={true} 
            onChange={handleOnChangeCheckin}
          />
          <Inputs 
            desc="Checkout" 
            type="date" 
            required={true} 
            onChange={handleOnChangeCheckout}
          />
          <Inputs 
            desc="Valor da Parcela" 
            type="number" 
            required={true} 
            onChange={handleOnChangeValorPrcela}
          />
          <Inputs 
            desc="Data Pagamento" 
            type="date" 
            required={true} 
            onChange={handleOnChangeDataPagamento}
          />
          <Inputs 
            desc="Com desconto" 
            type="checkbox" 
            checkbox="checkbox" 
            required={false} 
            onChecked={comDesconto} 
            onChange={handleOnChange} 
          />
          <Inputs 
            desc="Desconto %" 
            type="number" 
            required={false} 
            onChange={handleOnChangeDesconto} 
            disable={!comDesconto}
          />
          <Inputs 
            type="submit" 
            onClick={handleCriarReserva}
          />
        </Form>
      </Main>
    </Default>
  );
}
