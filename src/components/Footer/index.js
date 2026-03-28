import styles from './footer.module.css';
import { FooterImg, logo } from "../../assets";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useFadeUp, useStaggerUp } from "../../hooks/useGsap";

const Footer = () =>{
    const topRef = useStaggerUp();
    const disclaimerRef = useFadeUp({ delay: 0.2 });
    return(
        <div className={styles.outer}>

            {/* TOP SECTION */}
            <div className={styles.top} ref={topRef}>

                {/* LEFT */}
                <div className={styles.left}>
                    <img src={logo} alt="logo" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita...
                    </p>
                </div>

                {/* MIDDLE */}
                <div className={styles.middle}>
                    <div>
                        <h4>PROJECTS</h4>
                        <p>Residential</p>
                        <p>Commercial</p>
                    </div>

                    <div>
                        <h4>OUR STORY</h4>
                        <p>About Us</p>
                        <p>Blogs</p>
                        <p>FAQ</p>
                        <p>Contact Us</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className={styles.right}>
                    <h3>Stay connected</h3>
                    <hr className={styles.divider} />

                    {/* Google Review */}
                    <div className={styles.googleReview}>
                        <div className={styles.googleIcon}>
                            <svg viewBox="0 0 48 48" width="36" height="36">
                                <path fill="#4285F4" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/>
                                <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.2 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 16.3 2 9.7 7.4 6.3 14.7z"/>
                                <path fill="#FBBC05" d="M24 46c5.6 0 10.6-1.9 14.5-5.1l-6.7-5.5C29.7 36.9 27 38 24 38c-6.1 0-10.7-3.9-11.7-9.2l-7 5.4C9.5 41.7 16.2 46 24 46z"/>
                                <path fill="#EA4335" d="M44.5 20H24v8.5h11.8c-.8 2.9-2.7 5.4-5.3 7l6.7 5.5C40.7 37.4 44.5 31.2 44.5 24c0-1.3-.2-2.7-.5-4z"/>
                            </svg>
                        </div>
                        <div>
                            <p className={styles.googleLabel}>Google review</p>
                            <div className={styles.rating}>
                                <span className={styles.ratingNum}>4.8</span>
                                <span className={styles.stars}>★★★★★</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <FaFacebookF />
                        <FaXTwitter />
                        <FaLinkedinIn />
                        <FaInstagram />
                        <FaYoutube />
                    </div>
                </div>

            </div>

            {/* DISCLAIMER */}
            <div className={styles.disclaimer} ref={disclaimerRef}>
                <h2>Disclaimer</h2>
                <p>
                    Mansha buildcon private limited, a trusted real estate developer, aims to provide accurate project information including pricing, layouts, and availability. However, all details are subject to change without prior notice. Images and amenities shown are for illustration purposes and may vary in actual delivery. We advise all buyers to verify information with authorized Mansha Group representatives before making investment decisions. Mansha Group is not liable for any discrepancies that may arise.
                </p>
            </div>

            {/* BOTTOM */}
            <div className={styles.bottom}>
                <p>
                    © 2026 Manshagroup. All Rights Reserved. Digital Media Planned By Ritz Media World
                </p>
            </div>

            {/* IMAGE */}
            <img src={FooterImg} className={styles.footerImg} alt="footer" />

        </div>
    )
}

export default Footer;