import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Main } from "../components/Main/Main";

import styles from './Default.module.css';
export function Default(props) {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
}