import { AxiosError } from 'axios';
import { format } from 'date-fns';
import { FieldError } from './Interfaces';

export function formatDate(data: Date): string {
    return format(data, "dd/MM/yyyy")
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