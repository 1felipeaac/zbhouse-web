import { Card, Line } from "../components/Main/Card";
import { Carrocel } from "../components/Main/Carrocel";
import { Main } from "../components/Main/Main";
import { ChangeEvent, useEffect, useState } from "react";
import {api} from "../services/api"
import { Default } from "./Default";
import { format } from 'date-fns';

import React from "react";
import { Reservas } from "../Utils/Interfaces";
import { icons, titulos } from "../Utils/Lists";
import { AxiosError } from "axios";
import { CustomAlert } from "../components/Main/CustomAlert";
import { handlerCustomError } from "../Utils/Utils";


const iconsDB = icons.slice(0,3);
const titulosDB = titulos.slice(0,3)


export function DashBoard() {
  const [reservas, setReservas] = useState([]);
  const [paginas, setPaginas] = useState(0);
  // const [elementos, setElementos] = useState(0);
  const [pagAtual, setPagAtual] = useState(0)
  const [busca, setBusca] = useState<string>('')
  const [buscaReservas, setBuscaReservas] = useState([])
  const [messageAlert, setMessageAlert] = useState<string[] | string>([]);
  const [customAlert, setCustonAlert] = useState<boolean>(false);

  async function handleBusca(){

    try {
      if(busca != null){
        const {data} = await api.get(`reservas/busca/${busca}`);
  
        setBuscaReservas(data)
      }
      
    } catch (error) {
      const erro = error as AxiosError;
      handlerCustomError(erro, setCustonAlert, setMessageAlert)
    }
  }


  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const valor = (event.target as HTMLInputElement).value;
    setBusca(valor);
  }



  async function handleAvancarPagina(){

    if (pagAtual < (paginas-1)){
      setPagAtual((indice) =>{
        return indice + 1
      })
    }
  }

  async function handleVoltarPagina(){
    
    if (pagAtual > 0){
      setPagAtual((indice) =>{
        return indice - 1
      })
    }
  }

  async function handleDelete(id: number): Promise<void> {
    // console.log(id)
    try {
      await api.delete(`/reservas/${id}`);
    } catch (error) {
      throw new Error("Não foi possível excluir o registro")
    }
  }

  useEffect(()=>{
    async function paginacao() {
      const response = await api.get(`/reservas/todos?page=${pagAtual}`);
      const reservasData = response.data.content;
      setReservas(reservasData);
    }
  
    paginacao();
  },[pagAtual])


  useEffect(() => {
    async function listarReservas() {
      try{
        const response = await api.get("/reservas/todos");
        const totalPages = response.data.totalPages
        setPaginas(totalPages)
      }catch(err){
        console.log(err);
      }
    }

    listarReservas();
  }, []);

  useEffect(() => {
    setReservas(buscaReservas)
  },[buscaReservas])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCustonAlert(false);
      setMessageAlert("");
    }, 5500);
  
    return () => clearTimeout(timer);
  }, [messageAlert]);

  return (
    <Default navBar={{onChange: handleOnChange, onSearch:handleBusca, placeholder: "Busca por nome"}}>
      <Main>
      {messageAlert.length > 0 && (
          <CustomAlert customAlert={customAlert} message={messageAlert} />
        )}
        <Carrocel avancar={handleAvancarPagina} voltar={handleVoltarPagina} pagina={pagAtual+1}>
          {reservas &&
            reservas.map((reserva: Reservas, index: number) => {
              const lines = [
                reserva.documento,
                format(reserva.checkin, "dd/MM/yyyy"),
                format(reserva.checkout, "dd/MM/yyyy"),
              ];
            

              return (
                <Card
                  key={index}
                  id={reserva.id}
                  nome={reserva.nome}
                  valor={reserva.valor_reserva}
                  detail={`/detalhar/${reserva.id}`}
                  payment={`/pagamento/${reserva.id}`}
                  pago={reserva.pagamentos.length > 1}
                  deleted={true}
                  onHandleClickDelete={()=> handleDelete(reserva.id)}
                >
                  {lines &&
                    lines.map((line, index: number) => {
                      const icon = iconsDB[index];
                      const titulo = titulosDB[index];
                      return (<Line key={icon} icon={icon} item={`${titulo} ${line}`} />);
                    })}
                </Card>
              );
            })}
           
        </Carrocel>
      </Main>
    </Default>
  );
}
