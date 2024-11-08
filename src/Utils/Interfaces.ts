export interface Reservas {
    id: number;
    nome: string;
    documento: string;
    valor_reserva: number;
    desconto: number;
    checkin: Date;
    checkout: Date;
    pagamentos: Pagamentos[];
  }
  
  export interface Pagamentos {
    data_pagamento: Date | null;
    parcela: number;
    valor_pagamento: number;
  }

  export interface FieldError{
    field: string;
    message: string;
  }

  export interface AxioErrorResponse {
    message: string;
    name:    string;
    config:  Config;
    code:    string;
    status:  number;
}

export interface Config {
    headers:         Headers;
    baseURL:         string;
    withCredentials: boolean;
    method:          string;
    url:             string;
    data:            string;
}

export interface Headers {
    Accept:         string;
    "Content-Type": string;
}




  