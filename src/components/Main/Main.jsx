import { Card } from './Card'
import styles from './Main.module.css'

export function Main(){
    return(
        <main className={styles.main}>
            <div className={styles.carrocel}>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </main>
    )
}