import styles from './header.module.css';
import { header1 } from "../../assets";
import { useFadeUp, useScaleIn } from "../../hooks/useGsap";

const Header1 = () =>{
    const leftRef = useFadeUp({ delay: 0.2 });
    const rightRef = useFadeUp({ delay: 0.5 });
    const imgRef = useScaleIn();
    return(
      <div className={styles.outer}>

          <div className={styles.top}>
            <div className={styles.left} ref={leftRef}>
                <h1>
                    Your Captivating <br />
                    <span>Headline</span> Goes Here
                </h1>
            </div>

            <div className={styles.right} ref={rightRef}>
                <p>with a leading real estate agency</p>

                <button className={styles.btn}>
                    Get consultation →
                </button>
            </div>
          </div>
        
          <div className={styles.bottom} ref={imgRef}>
              <img src={header1} alt="header" />
          </div>

        </div>
    )
}

export default Header1;