import React from 'react'
import { Card } from './Card'
// @ts-ignore
import styles from './Main.module.css'

export function Main(props){
    return(
        <main className={styles.main}>
            {props.children}
        </main>
    )
}