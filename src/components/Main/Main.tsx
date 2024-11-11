import React, { ReactNode } from 'react'
import { Card } from './Card'
// @ts-ignore
import styles from './Main.module.css'

interface MainProps{
    children: ReactNode;
}

export function Main({children}:MainProps){
    return(
        <main className={styles.main}>
            {children}
        </main>
    )
}