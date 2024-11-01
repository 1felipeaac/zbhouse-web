import { Items } from './Items'
import styles from './Sidebar.module.css'

const descs = ["Dashboard", "Reservar", "Pagamento", "Disponibilidade"]
const icons = ["space_dashboard", "format_list_bulleted", "paid", "calendar_month"]
const pages = ["/", "/reservar", "/pagamento", "/disponibilidade"]

export function Sidebar(){
    return (
        <aside className={styles.sidebar}>

            {descs.map((desc, index) => {
                const icon = icons[index]
                const page = pages[index]

                return(
                    <Items key= {index} desc={desc} icon={icon} page={page}/>
                )
            })}
        </aside>
    )
}