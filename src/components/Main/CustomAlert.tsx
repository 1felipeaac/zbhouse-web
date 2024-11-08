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