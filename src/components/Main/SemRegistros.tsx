import React from "react";
//@ts-ignore
import styles from './SemRegistros.module.css'

export function SemRegistros(){

    return (
        <div className={styles.empty}>
            <span className="material-icons">
                note_add
            </span>
            <h2>Não há registros!</h2>
        </div>
    )
    
}