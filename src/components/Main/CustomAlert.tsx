import React from 'react';
// @ts-ignore
import styles from './CustomAlert.module.css'

interface CustomAlertProps {
    message?: string[] | string;
    onClose?: () => void;
    customAlert?: boolean;
}
export function CustomAlert({ message, customAlert }: CustomAlertProps) {
  const classSelected = customAlert ? `${styles.customErrorAlert}` : `${styles.customSuccessAlert}`

    return (
      <div className={classSelected}>
        {Array.isArray(message) ? message.map( m => { return <p key={m}>{m}</p>}) : <p>{message}</p>}
      </div>
    );
  }

  interface CustomDeletedAlertProps {
    nome?: string;
    onhandleConfirm?: () => void;
    onhandleBlocked?: () => void;
}

  export function DeleteAlert({nome, onhandleConfirm, onhandleBlocked}:CustomDeletedAlertProps){
    return(
      <div className={styles.deleteAlert}>
          <span>Deseja excluir a reserva de {nome}?</span>
          <div className={styles.buttonsAlert}>
            <button className='material-icons' onClick={onhandleConfirm}>check_circle</button>
            <button className='material-icons' onClick={onhandleBlocked}>block</button>
          </div>
      </div>
    )
  }

  interface SearchAlertProps{
    message?: string;
    codigo?: number
  }

  export function SearchAlert({message, codigo}:SearchAlertProps){
    const classSelected = codigo == 1 ? `${styles.customSuccessAlert}` : `${styles.customErrorAlert}`
    return(
      <div className={classSelected}>
        {message}
      </div>
    )
  }