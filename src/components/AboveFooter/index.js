import styles from './AboveFooter.module.css';
import { arrow, aboveFooter } from "../../assets";
import { useScaleIn } from "../../hooks/useGsap";

const AboveFooter = () =>{
    const ref = useScaleIn();
    return(
        <div className={styles.outer} ref={ref}>

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