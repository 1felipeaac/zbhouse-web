import { Card, Line } from "../components/Main/Card";
import { Carrocel } from "../components/Main/Carrocel";
import { Main } from "../components/Main/Main";
import { useEffect, useState } from "react";
import {api, configHeaders} from "../services/api"
import { Default } from "./Default";
import { format } from 'date-fns';

import React from "react";
import { Reservas } from "../Utils/Interfaces";
import { icons, titulos } from "../Utils/Lists";


const iconsDB = icons.slice(0,3);
const titulosDB = titulos.slice(0,3)


export function DashBoard() {
  const [reservas, setReservas] = useState([]);
  const [paginas, setPaginas] = useState(0);
  const [elementos, setElementos] = useState(0);
  const [pagAtual, setPagAtual] = useState(0)



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
        const reservasData = response.data.content;
        const totalElements = response.data.totalPages
        const totalPages = response.data.totalPages
        setReservas(reservasData);
        setPaginas(totalPages)
        setElementos(totalElements)
      }catch(err){
        console.log(err);
      }
    }

    listarReservas();
  }, []);
  return (
    <Default>
      <Main>
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
