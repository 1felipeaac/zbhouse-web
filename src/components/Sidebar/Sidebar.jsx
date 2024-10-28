import { Items } from './Items'
import styles from './Sidebar.module.css'
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <Items desc="Dashboard" icon="space_dashboard" page="/"/>
            <Items desc="Reservar" icon="format_list_bulleted" page="/reservar"/>
            <Items desc="Pagamento" icon="paid" page="/pagamento"/>
            <Items desc="Disponibilidade" icon="calendar_month" page="/disponibilidade"/>
        </aside>
    )
}