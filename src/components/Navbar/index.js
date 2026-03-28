import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from './navbar.module.css';
import { logo } from "../../assets";
import { FaPhoneAlt, FaWhatsapp, FaBars } from "react-icons/fa";

const Navbar = () =>{
    const navRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
    }, []);
    return(
        <div className={styles.outer} ref={navRef}>
            <div className={styles.left}>
                <img src={logo} alt="Mansha logo" />
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