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
import { CustomAlert, DeleteAlert } from "../components/Main/CustomAlert";
import { formatDate, handlerCustomError } from "../Utils/Utils";


const iconsDB = icons.slice(0,3);
const titulosDB = titulos.slice(0,3)

interface ReservaSelected{
  id: number;
  nome: string
}


export function DashBoard() {
  const [reservas, setReservas] = useState([]);
  const [paginas, setPaginas] = useState(0);
  // const [elementos, setElementos] = useState(0);
  const [pagAtual, setPagAtual] = useState(0)
  const [busca, setBusca] = useState<string>('')
  const [buscaReservas, setBuscaReservas] = useState([])
  const [messageAlert, setMessageAlert] = useState<string[] | string>([]);
  const [customAlert, setCustonAlert] = useState<boolean>(false);
  const [deleteAlert, setDeleteAlert] = useState<boolean>(false)
  const [reservaSelected, setReservaSelected] = useState<ReservaSelected>({id: 0, nome: '' })
  
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

  function handleDeleteAlert({id, nome}:ReservaSelected) {
    setReservaSelected({id, nome})
    setDeleteAlert(true)
  }

  async function handleDelete(id: number){
    try {
      await api.delete(`/reservas/${id}`);
      setDeleteAlert(false)
      setMessageAlert(`Reserva de ${reservaSelected.nome} excluída com sucesso!`)
      setReservaSelected({id: 0, nome: '' })
    } catch (error) {
      setDeleteAlert(false)
      const erro = error as AxiosError
      if(erro){
        handlerCustomError(erro, setCustonAlert, setMessageAlert)
      }
      throw new Error("Não foi possível excluir o registro")
    }
  }
  
  function handleBlocked(){
    setDeleteAlert(false)
    setReservaSelected({id: 0, nome: '' })
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
        // const reservasData = response.data.content;
        // setReservas(reservasData);
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
    const timer = setTimeout(async () => {
      setCustonAlert(false);
      setMessageAlert("");
      const response = await api.get("/reservas/todos");
      const reservasData = response.data.content;
      const totalPages = response.data.totalPages
      setPaginas(totalPages)
      setReservas(reservasData);
    }, 4500);
    
    return () => clearTimeout(timer);
  }, [messageAlert]);

  return (
    <Default navBar={{onChange: handleOnChange, onSearch:handleBusca, placeholder: "Busca por nome"}}>
      <Main>
      {messageAlert.length > 0 && (
          <CustomAlert customAlert={customAlert} message={messageAlert} />
        )}
        <Carrocel avancar={handleAvancarPagina} voltar={handleVoltarPagina} pagina={pagAtual+1}>
          {reservas.length > 0 ?
            reservas.map((reserva: Reservas) => {
              const lines = [
                reserva.documento,
                formatDate(reserva.checkin.toString()),
                formatDate(reserva.checkout.toString()),
              ];
            

              return (
                <div key={reserva.id}>
                  {deleteAlert === true 
                    && reservaSelected.id !== 0 
                    && reservaSelected.id === reserva.id ? 
                    <DeleteAlert
                      nome={reservaSelected.nome} 
                      onhandleConfirm={() => handleDelete(reservaSelected.id)} 
                      onhandleBlocked={handleBlocked} 
                    /> :
                    <Card
                      id={reserva.id}
                      nome={reserva.nome}
                      valor={reserva.valor_reserva}
                      detail={`/detalhar/${reserva.id}`}
                      payment={`/pagamento/${reserva.id}`}
                      pago={reserva.pagamentos.length > 1}
                      deleted={true}
                      onHandleClickDelete={()=> handleDeleteAlert({id: reserva.id, nome: reserva.nome})}
                    >
                    {lines &&
                      lines.map((line, index: number) => {
                        const icon = iconsDB[index];
                        const titulo = titulosDB[index];
                        return (<Line key={icon} icon={icon} item={`${titulo} ${line}`} />);
                      })}
                  </Card>}
                </div>
              );
            }): <>Sem reservas</>}
           
        </Carrocel>
      </Main>
    </Default>
  );
}
