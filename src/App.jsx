import { Header } from "./components/Header/Header";

import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aliquid modi, id quis aspernatur odit optio esse animi voluptates
            repellendus blanditiis, ipsum velit possimus recusandae nisi!
            Possimus animi non qui?
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            aliquid modi, id quis aspernatur odit optio esse animi voluptates
            repellendus blanditiis, ipsum velit possimus recusandae nisi!
            Possimus animi non qui?
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
