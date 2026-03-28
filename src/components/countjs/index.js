import CountUp from "react-countup";
import styles from "./countjs.module.css";
import { building } from "../../assets";
import { useFadeUp, useStaggerUp } from "../../hooks/useGsap";

const Countjs = () =>{
    const headingRef = useFadeUp();
    const statsRef = useStaggerUp();
    const imgRef = useFadeUp({ delay: 0.3 });
    return(
        <div className={styles.outer}>

            {/* LEFT WHITE PANEL */}
            <div className={styles.leftPanel}>
                <h2 className={styles.top} ref={headingRef}>Built On Trust</h2>

                <div className={styles.statsGroup} ref={statsRef}>
                    <div className={styles.statItem}>
                        <h3><CountUp end={14} duration={3} />+</h3>
                        <p>Delivered Projects</p>
                    </div>
                    <div className={styles.statItem}>
                        <h3><CountUp end={65} duration={3} />+</h3>
                        <p>Lac Sq. Ft Delivered</p>
                    </div>
                    <div className={styles.statItem}>
                        <h3><CountUp end={2500} duration={3} />+</h3>
                        <p>Happy Customers</p>
                    </div>
                </div>
            </div>

            {/* RIGHT — BUILDING IMAGE ONLY */}
            <div className={styles.imageWrapper} ref={imgRef}>
                <img src={building} alt="building" />
            </div>

        </div>
    )
}

export default Countjs;