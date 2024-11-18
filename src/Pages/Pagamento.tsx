import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import { Default } from "./Default";
// @ts-ignore
import styles from "./Pagamento.module.css";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { Reservas } from "../Utils/Interfaces";
import { AxiosError } from "axios";
import { PieChart } from "@mui/x-charts/PieChart";
import { PieSeriesType } from '@mui/x-charts'
import { CustomAlert } from "../components/Main/CustomAlert";
import { handlerCustomError } from "../Utils/Utils";

interface DataItem {
  label: string;
  value: number | undefined;
}

interface Quantia {
  quantia: number;
}

export function Pagamento() {
  const [reserva, setReserva] = useState<Reservas | null>(null);
  const [valor, setValor] = useState<number>();
  const [data, setData] = useState<Date>();
  const [customAlert, setCustonAlert] = useState<boolean>(false);
  const [messageAlert, setMessageAlert] = useState<string>("");
  const [recebidos, setRecebidos] = useState<Quantia>();
  const [aReceber, setAReceber] = useState<Quantia>();
  const [total, setTotal] = useState<DataItem[]>([]);

  const params = useParams();

  async function pagarSegundaParcela(event: FormEvent) {
    event.preventDefault();
    try {
      await api.post(`/pagamentos/${params.id}`, {
        valor,
        data,
      });
      setMessageAlert("Pagamento registrado com sucesso!");
    } catch (error) {
      const erro = error as AxiosError;
      handlerCustomError(erro, setCustonAlert, setMessageAlert)
    }
  }

  function handleValorParcela(event: ChangeEvent<HTMLInputElement>) {
    const valor = (event.target as HTMLInputElement).value;
    setValor(Number(valor));
  }
  function handleDataPagamento(event: ChangeEvent<HTMLInputElement>) {
    const valor = (event.target as HTMLInputElement).value;
    setData(new Date(valor));
  }


  useEffect(() => {
    const timer = setTimeout(() => {
      setCustonAlert(false);
      setMessageAlert("");
    }, 5500);
  
    return () => clearTimeout(timer);
  }, [messageAlert]);


  useEffect(() => {
    async function detalharReserva() {
      if (params.id != undefined) {
        const { data } = await api.get(`/reservas/${params.id}`);
        setReserva(data);
      } else {
        const recebidosResponse = await api.get("pagamentos/recebidos");
        setRecebidos(recebidosResponse.data);
        const aReceberResponse = await api.get("pagamentos/aReceber");
        setAReceber(aReceberResponse.data);
      }
    }
    detalharReserva();
  }, [params.id]);

  useEffect(() => {
    function criarListaCharts() {
      let dataCharts: DataItem[] = [];
      if (recebidos != undefined && aReceber != undefined) {
        dataCharts = [
          { label: "Recebidos", value: recebidos.quantia },
          { label: "A Receber", value: aReceber.quantia },
        ];
      }
      setTotal(dataCharts);
    }

    criarListaCharts();
  }, [aReceber, recebidos]);
  return (
    <Default>
      <Main>
        {messageAlert && (
          <CustomAlert customAlert={customAlert} message={messageAlert} />
        )}
        {params.id === undefined && (
          <div className={styles.pieChart}>
            {total && (
              <PieChart
                colors={["#276be1", "#f5c21f"]}
                series={[
                  {
                    data: total,
                    highlightScope: { fade: "global", highlight: "item" },
                    faded: {
                      innerRadius: 30,
                      additionalRadius: -30,
                      color: "gray",
                    },
                  },
                ]}
                height={200}
              />
            )}
          </div>
        )}
        {reserva && (
          <Form>
            <Inputs
              desc="Valor da Reserva"
              type="number"
              disable={true}
              value={reserva.valor_reserva.toFixed(2)}
            />
            <Inputs
              desc="Nome"
              type="text"
              disable={true}
              value={reserva.nome}
            />
            <Inputs
              desc="Documento"
              type="text"
              disable={true}
              value={reserva.documento}
            />
            <Inputs
              desc="Checkin"
              type="date"
              disable={true}
              value={reserva.checkin.toString()}
            />
            <Inputs
              desc="Checkout"
              type="date"
              disable={true}
              value={reserva.checkout.toString()}
            />
            <Inputs
              desc="Valor da Parcela"
              type="number"
              disable={true}
              value={reserva.pagamentos[0].valor_pagamento.toFixed(2)}
            />
            <Inputs
              desc="Data do Pagamento"
              type="date"
              disable={true}
              value={reserva.pagamentos[0].data_pagamento ? reserva.pagamentos[0].data_pagamento.toString() : ''}
            />
            <Inputs
              desc="Segunda Parcela"
              type="number"
              required={true}
              onChange={handleValorParcela}
            />
            <Inputs
              desc="Data do Pagamento"
              type="date"
              required={true}
              onChange={handleDataPagamento}
            />
            <Inputs type="submit" onClick={pagarSegundaParcela} />
          </Form>
        )}
      </Main>
    </Default>
  );
}
