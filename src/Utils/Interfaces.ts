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
    data_pagamento: Date;
    parcela: number;
    valor_pagamento: number;
  }
  