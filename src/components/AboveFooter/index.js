import styles from './AboveFooter.module.css';
import { arrow, aboveFooter } from "../../assets";

const AboveFooter = () =>{
    return(
        <div className={styles.outer}>

            {/* BACKGROUND IMAGE */}
            <img src={aboveFooter} alt="aboveFooter" className={styles.bg} />

            {/* CONTENT */}
            <div className={styles.content}>
                <p>GET YOUR PERSONALIZED OFFER</p>

                <button className={styles.btn}>
                    Get consultation
                    <img src={arrow} alt="arrow" />
                </button>
            </div>

        </div>
    )
}

export default AboveFooter;