// @ts-nocheck
import React from "react";
import CalendarMaterial from "../components/Main/CalendarMaterial";
import { Main } from "../components/Main/Main";
import { Default } from "./Default";

import styles from "./Disponibilidade.module.css"

export function Disponibilidade() {
  return (
    <Default 
      navBar={
        {
          disabled:true, 
          placeholder:"Pesquisa indisponível"
        }
      }
    >
      <Main>
        <div className={styles.calendar}>
          <CalendarMaterial />
        </div>
      </Main>
    </Default>
  );
}
