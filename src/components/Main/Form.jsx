import styles from "./Form.module.css";

function Inputs(props) {
  return (
    <div className={styles.inputs}>
      <div>
        <span>{props.desc}</span>
        <input type={props.type} />
      </div>
    </div>
  );
}

export function Form() {
  return (
    <div className={styles.formPage}>
      <form className={styles.form}>
        <div className={styles.leftColumn}>
          <Inputs desc="Nome" type="text" />
          <Inputs desc="Checkin" type="datetime-local" />
          <Inputs desc="Valor da Parcela" type="number" />
          <Inputs desc="Com desconto" type="checkbox" />
        </div>
        <div>
          <Inputs desc="Documento" type="text" />
          <Inputs desc="Checkput" type="datetime-local" />
          <Inputs desc="Valor da Parcela" type="datetime-local" />
          <Inputs desc="Desconto %" type="number"/>
        </div>
      </form>
      <button>Enviar</button>
    </div>
  );
}
