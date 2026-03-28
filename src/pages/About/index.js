import styles from './about.module.css';
import { useFadeUp, useStaggerUp } from "../../hooks/useGsap";
import { building } from "../../assets";

const About = () => {
    const heroRef = useFadeUp();
    const storyTextRef = useFadeUp({ delay: 0.2 });
    const storyImgRef = useFadeUp({ delay: 0.4 });
    const valuesRef = useStaggerUp();
    const teamRef = useStaggerUp();

    return (
        <>
            {/* HERO */}
            <section className={styles.hero} ref={heroRef}>
                <h1>About Mansha Group</h1>
                <p>
                    A legacy of trust, quality, and innovation in real estate.
                    Building premium living spaces since over a decade.
                </p>
            </section>

            {/* OUR STORY */}
            <section className={styles.story}>
                <div className={styles.storyText} ref={storyTextRef}>
                    <h2>Our <span>Story</span></h2>
                    <p>
                        Founded with a vision to transform the real estate landscape,
                        Mansha Group has been at the forefront of delivering premium
                        residential and commercial projects that redefine modern living.
                    </p>
                    <p>
                        With over 14 successfully delivered projects spanning 65+ lac sq. ft.,
                        we have earned the trust of 2,500+ happy customers who call our
                        developments home.
                    </p>
                    <p>
                        Our commitment to quality craftsmanship, timely delivery, and
                        transparent dealings has made us one of the most trusted names
                        in the industry.
                    </p>
                </div>
                <div className={styles.storyImage} ref={storyImgRef}>
                    <img src={building} alt="Mansha building" />
                </div>
            </section>

            {/* VALUES */}
            <section className={styles.values}>
                <h2>Our Core Values</h2>
                <p className={styles.valuesSubtitle}>
                    The principles that guide every project we build
                </p>
                <div className={styles.valuesGrid} ref={valuesRef}>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>✦</div>
                        <h3>Quality Excellence</h3>
                        <p>Every detail is meticulously crafted to meet the highest standards of quality and durability.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>⏱</div>
                        <h3>Timely Delivery</h3>
                        <p>We honor our commitments with consistent on-time delivery across all projects.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>🤝</div>
                        <h3>Transparency</h3>
                        <p>Open communication and honest dealings form the foundation of our customer relationships.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>🏗</div>
                        <h3>Innovation</h3>
                        <p>We embrace modern architecture and sustainable practices to build future-ready spaces.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>🌿</div>
                        <h3>Sustainability</h3>
                        <p>Eco-friendly designs and green building practices for a better tomorrow.</p>
                    </div>
                    <div className={styles.valueCard}>
                        <div className={styles.valueIcon}>❤</div>
                        <h3>Customer First</h3>
                        <p>Every decision we make is centered around creating the best experience for our customers.</p>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className={styles.team}>
                <h2>Leadership Team</h2>
                <p className={styles.teamSubtitle}>
                    The visionaries behind Mansha Group
                </p>
                <div className={styles.teamGrid} ref={teamRef}>
                    <div className={styles.teamCard}>
                        <div className={styles.teamAvatar}>RG</div>
                        <h3>Rajesh Gupta</h3>
                        <p>Founder & Chairman</p>
                    </div>
                    <div className={styles.teamCard}>
                        <div className={styles.teamAvatar}>AG</div>
                        <h3>Amit Gupta</h3>
                        <p>Managing Director</p>
                    </div>
                    <div className={styles.teamCard}>
                        <div className={styles.teamAvatar}>PG</div>
                        <h3>Priya Gupta</h3>
                        <p>Head of Design</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
