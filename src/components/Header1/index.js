import React from "react";
import styles from './header.module.css';
import { header1 } from "../../assets";

const Header1 = () =>{
    return(
      <div className={styles.outer}>

          <div className={styles.top}>
            <div className={styles.left}>
                <h1>
                    Your Captivating <br />
                    <span>Headline</span> Goes Here
                </h1>
            </div>

            <div className={styles.right}>
                <p>with a leading real estate agency</p>

                <button className={styles.btn}>
                    Get consultation →
                </button>
            </div>
          </div>
        
          <div className={styles.bottom}>
              <img src={header1} alt="header" />
          </div>

        </div>
    )
}

export default Header1;