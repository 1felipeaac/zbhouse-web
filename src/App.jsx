import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import {Main} from "./components/Main/Main";

import "./global.css";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
