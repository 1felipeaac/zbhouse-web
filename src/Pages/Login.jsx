import styles from './Login.module.css';
import ZBHouseLogo from "../assets/zbHouseLogo.png"
import { Form, Inputs } from '../components/Main/Form';

export function Login(){
    return(
        <div className={styles.wrapperLogin}>
            <div className={styles.asideImg}>
                <img src={ZBHouseLogo} alt="" />
            </div>
            <div className={styles.formLoginPage}>
                <h3>Login</h3>
                <Form>
                    <Inputs desc="Usuario" type="text" required={true}/>
                    <Inputs desc="Senha" type="text" required={true}/>
                    <Inputs type="submit"/>
                </Form>
            </div>
        </div>
    )
}