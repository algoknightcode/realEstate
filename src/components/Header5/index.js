import React, { useState } from "react";
import styles from './header5.module.css';
import { header5 } from "../../assets";

const items = [
    { title: "BUSINESS HUB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim..." },
    { title: "BUSINESS HUB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim..." },
    { title: "BUSINESS HUB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim..." },
    { title: "BUSINESS HUB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim..." },
    { title: "BUSINESS HUB", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim..." },
];

export const Header5 = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    return(
        <div className={styles.outer}>

            {/* TOP */}
            <div className={styles.top}>
                <div className={styles.heading}>FACILITIES</div>
                <div className={styles.subheading}>Carefully designed infrastructure for living, working, and growth</div>
            </div>

            {/* BOTTOM */}
            <div className={styles.bottom}>

                {/* LEFT IMAGE */}
                <div className={styles.left}>
                    <img src={header5} alt="facility" />
                </div>

                {/* RIGHT CONTENT */}
                <div className={styles.right}>
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`${styles.item} ${activeIndex === i ? styles.active : ""}`}
                            onClick={() => setActiveIndex(i)}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}