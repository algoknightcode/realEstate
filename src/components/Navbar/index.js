import React from "react";
import styles from './navbar.module.css';
import { logo } from "../../assets";
import { FaPhoneAlt, FaWhatsapp, FaBars } from "react-icons/fa";

const Navbar = () =>{
    return(
        <div className={styles.outer}>
            <div className={styles.left}>
                <img src = {logo }/>
            </div>
            <div className={styles.right}>
                <FaPhoneAlt size ={20} />
                <FaWhatsapp size ={24} />
                <FaBars size ={24} />
            </div>

        </div>
    )
}

export default Navbar;