import React from "react";
import styles from './header4.module.css';
import { header4 } from "../../assets";

export const Header4 = () => {
    return(
        <div className={styles.outer}>
            <div className={styles.top}>
                <h2>Signature Masterpieces</h2>
                <div className={styles.arrows}>
                    <button className={styles.arrowBtn}>&#8592;</button>
                    <button className={styles.arrowBtn}>&#8594;</button>
                </div>
            </div>
            <div className={styles.bottom}>
                <img src={header4} alt="header4" />
            </div>           
        </div>
    )
}