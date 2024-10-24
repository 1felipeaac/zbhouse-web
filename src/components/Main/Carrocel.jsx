import styles from './Carrocel.module.css';
export function Carrocel(props) {
  return <div className={styles.carrocel}>{props.children}</div>;
}
