import styles from './subheader.module.css';
import { subheader41, subheader42 } from "../../assets";
import { useFadeUp, useStaggerUp } from "../../hooks/useGsap";

export const Subheader = () => {
    const headRef = useFadeUp();
    const cardsRef = useStaggerUp();
    return(
        <div className={styles.outer}>

            <div className={styles.content} ref={headRef}>
                Trust Mansha Group For Your Next Real Estate Investment
            </div>

            <div className={styles.subcontent}>
                Faridabad's Most Reliable Developer.
            </div>

            <div className={styles.cards} ref={cardsRef}>

                <div className={styles.card}>
                    <img src={subheader41} alt="award1" />
                    <div className={styles.cardText}>
                        <span className={styles.date}>&#128197; November 10, 2025</span>
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor In...</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src={subheader42} alt="award2" />
                    <div className={styles.cardText}>
                        <span className={styles.date}>&#128197; November 10, 2025</span>
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor In...</p>
                    </div>
                </div>

            </div>

        </div>
    )
}