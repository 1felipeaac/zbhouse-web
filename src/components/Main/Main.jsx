import { Card } from './Card'
import styles from './Main.module.css'

export function Main(props){
    return(
        <main className={styles.main}>
            {props.children}
        </main>
    )
}