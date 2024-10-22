import { Items } from './Items'
import styles from './Sidebar.module.css'
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <Items desc="Dashboard" icon="space_dashboard"/>
            <Items desc="Reservar" icon="format_list_bulleted"/>
            <Items desc="Pagamento" icon="paid"/>
            <Items desc="Disponibilidade" icon="calendar_month"/>
            <footer className={styles.footer}>Suporte: felipeaacoelho@gmail.com</footer>
        </aside>
    )
}