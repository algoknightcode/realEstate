import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import styles from './navbar.module.css';
import { logo } from "../../assets";
import { FaPhoneAlt, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        gsap.fromTo(navRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <div className={styles.outer} ref={navRef}>
            <div className={styles.left}>
                <Link to="/">
                    <img src={logo} alt="Mansha logo" />
                </Link>
            </div>

            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`${styles.navLink} ${location.pathname === link.to ? styles.active : ""}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            <div className={styles.right}>
                <FaPhoneAlt size={20} />
                <FaWhatsapp size={24} />
                <button
                    className={styles.menuToggle}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>
        </div>
    );
};

export default Navbar;