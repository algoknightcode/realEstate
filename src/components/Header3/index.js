import React from "react";
import styles from './header3.module.css';
import { building, header1 } from "../../assets";

export const Header3 = () => {
    return (
        <div className={styles.outer}>

            <div className={styles.top}>

                {/* LEFT */}
                <div className={styles.left}>
                    <h1>Shaping Dreams <br />Into Masterpieces</h1>
                </div>

                {/* MIDDLE */}
                <div className={styles.middle}>
                    At Mansha Group, we are one of the fastest-growing real estate developers in Faridabad, built on a foundation of quality, innovation, and customer satisfaction. We develop thoughtfully designed residential and commercial spaces that reflect modern living, with a strong commitment to timely delivery and reliability.
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    <button className={styles.btn}>
                        Explore Our Projects
                    </button>
                </div>

            </div>
            <div className={styles.bottom}>

                <div className={styles.card}>
                    <img src={building} alt="building" />
                    <div className={styles.overlay}></div>
                    <span className={styles.label}>Residential</span>
                </div>

                <div className={`${styles.card} ${styles.cardActive}`}>
                    <img src={header1} alt="commercial" />
                    <div className={styles.overlay}></div>
                    <span className={styles.label}>Commercial</span>
                    <div className={styles.cardContent}>
                        <p>Elegant Living Spaces Designed For Modern Families.</p>
                        <button className={styles.cardBtn}>Read More</button>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={building} alt="building" />
                    <div className={styles.overlay}></div>
                    <span className={styles.label}>Residential</span>
                </div>

            </div>

        </div>
    )
}