import { AxiosError } from 'axios';
import { format, parseISO } from 'date-fns';
import { FieldError } from './Interfaces';

export function formatDate(data: string): string {
    const date = parseISO(data)
    return format(date, "dd/MM/yyyy")
}

export const valueFormatter = (item: { value: number }) => `${item.value}%`;

export function handlerCustomError(erro: AxiosError, setCustonAlert: Function, setMessageAlert: Function){
    setCustonAlert(true);
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

export function verificaPagamento(pagamento:Date | null){
  return formatDate(pagamento == null ? "Em aberto" : pagamento.toString());
}