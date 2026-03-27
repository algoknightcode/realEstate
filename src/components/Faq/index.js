import React, { useState } from "react";
import styles from './faq.module.css';

const faqs = [
    { q: "What Is Off-Plan Real Estate And Is It Worth Investing In It?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { q: "What Is Off-Plan Real Estate And Is It Worth Investing In It?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { q: "What Is Off-Plan Real Estate And Is It Worth Investing In It?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { q: "What Is Off-Plan Real Estate And Is It Worth Investing In It?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { q: "What Is Off-Plan Real Estate And Is It Worth Investing In It?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className={styles.outer}>

            {/* LEFT — heading */}
            <div className={styles.left}>
                <h2 className={styles.heading}>Frequently Asked Questions</h2>
                <p className={styles.sub}>If You Have Any Other Questions, Please Email Us.</p>
            </div>

            {/* RIGHT — accordion */}
            <div className={styles.accordion}>
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className={`${styles.item} ${openIndex === i ? styles.open : ""}`}
                    >
                        <div
                            className={styles.question}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <span>{faq.q}</span>
                            <button className={`${styles.icon} ${openIndex === i ? styles.iconOpen : ""}`}>
                                ↓
                            </button>
                        </div>
                        <div className={`${styles.answer} ${openIndex === i ? styles.answerOpen : ""}`}>
                            <p>{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Faq;