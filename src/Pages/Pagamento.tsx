import { Main } from "../components/Main/Main";
import { Form, Inputs } from "../components/Main/Form";
import { Default } from "./Default";
// @ts-ignore
import styles from "./Pagamento.module.css";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { api } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";
import { Reservas } from "../Utils/Interfaces";
import Cookies from "js-cookie";

export function Pagamento() {
  const [reserva, setReserva] = useState<Reservas | null>(null);
  const [valor, setValor] = useState<number>();
  const [data, setData] = useState<Date>();
  const [cookie, setCookie] = useState<string>("");

  const params = useParams();

  const navigate = useNavigate();

  async function pagarSegundaParcela(event: FormEvent) {
    event.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      await api.post(
        `/pagamentos/${params.id}`,
        { valor, data },
        { withCredentials: true, headers: headers }
      );

      navigate(-1);
    } catch (e) {
      console.log(e);
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
    async function pagamentoSegundaParcela() {
      const { data } = await api.get(`/reservas/${params.id}`);

      setReserva(data);
    }
    pagamentoSegundaParcela();
  }, []);
  return (
    <Default>
      <Main>
        {reserva && (
          <Form>
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
              type="datetime-local"
              disable={true}
              value={reserva.checkin.toString()}
            />
            <Inputs
              desc="Checkout"
              type="datetime-local"
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
              type="datetime-local"
              disable={true}
              value={reserva.pagamentos[0].data_pagamento.toString()}
            />
            <Inputs
              desc="Segunda Parcela"
              type="number"
              required={true}
              onChange={handleValorParcela}
            />
            <Inputs
              desc="Data do Pagamento"
              type="datetime-local"
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
