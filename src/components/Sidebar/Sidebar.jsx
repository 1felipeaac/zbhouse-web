import React from 'react'
import { Items } from './Items'
// @ts-ignore
import styles from './Sidebar.module.css'
import { descs, iconsSideBar, pages } from '../../Utils/Lists'


export function Sidebar(){
    return (
        <aside id='sidebar' className={styles.sidebar}>

            {descs.map((desc, index) => {
                const icon = iconsSideBar[index]
                const page = pages[index]

                return(
                    <Items key= {index} desc={desc} icon={icon} page={page}/>
                )
            })}
        </aside>
    )
}