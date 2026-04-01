import { Link } from 'react-router-dom';
import styles from './services.module.css';
import { building, header1, header4 } from '../../assets';
import { useFadeUp, useStaggerUp } from '../../hooks/useGsap';

const projects = [
    {
        title: 'Mansha Heights',
        type: 'Residential',
        status: 'Delivered',
        area: '2.5 Lac Sq. Ft.',
        location: 'Sector 84, Faridabad',
        image: building,
    },
    {
        title: 'Mansha Business Park',
        type: 'Commercial',
        status: 'Ongoing',
        area: '4.2 Lac Sq. Ft.',
        location: 'Sector 89, Faridabad',
        image: header1,
    },
    {
        title: 'Mansha Residency',
        type: 'Residential',
        status: 'Delivered',
        area: '3.8 Lac Sq. Ft.',
        location: 'Sector 76, Faridabad',
        image: header4,
    },
    {
        title: 'Mansha Commercial Hub',
        type: 'Commercial',
        status: 'Upcoming',
        area: '5.0 Lac Sq. Ft.',
        location: 'Sector 88, Faridabad',
        image: building,
    },
    {
        title: 'Mansha Green Villas',
        type: 'Residential',
        status: 'Ongoing',
        area: '6.1 Lac Sq. Ft.',
        location: 'Sector 92, Faridabad',
        image: header1,
    },
    {
        title: 'Mansha Tower',
        type: 'Commercial',
        status: 'Delivered',
        area: '3.0 Lac Sq. Ft.',
        location: 'Sector 81, Faridabad',
        image: header4,
    },
];

const Services = () => {
    const heroRef = useFadeUp();
    const introRef = useFadeUp({ delay: 0.2 });
    const gridRef = useStaggerUp();
    const ctaRef = useFadeUp({ delay: 0.2 });

    return (
        <>
            {/* HERO */}
            <section className={styles.hero} ref={heroRef}>
                <h1>Our Projects</h1>
                <p>
                    Explore our portfolio of premium residential and commercial developments
                    that define modern living in Faridabad.
                </p>
            </section>

            {/* INTRO */}
            <section className={styles.intro} ref={introRef}>
                <div className={styles.introCard}>
                    <div className={styles.introIcon}>🏠</div>
                    <h3>Residential</h3>
                    <p>Thoughtfully designed homes for modern families with premium amenities and green spaces.</p>
                </div>
                <div className={styles.introCard}>
                    <div className={styles.introIcon}>🏢</div>
                    <h3>Commercial</h3>
                    <p>State-of-the-art business spaces built for productivity, growth, and success.</p>
                </div>
                <div className={styles.introCard}>
                    <div className={styles.introIcon}>🌆</div>
                    <h3>Mixed-Use</h3>
                    <p>Integrated developments that combine the best of living, working, and leisure.</p>
                </div>
            </section>

            {/* PROJECTS GRID */}
            <section className={styles.projectsSection}>
                <h2>Featured Projects</h2>
                <p className={styles.projectsSubtitle}>
                    A showcase of our finest developments across Faridabad
                </p>
                <div className={styles.projectsGrid} ref={gridRef}>
                    {projects.map((project, i) => (
                        <div className={styles.projectCard} key={i}>
                            <div className={styles.projectImage}>
                                <img src={project.image} alt={project.title} />
                                <span className={`${styles.badge} ${styles[project.status.toLowerCase()]}`}>
                                    {project.status}
                                </span>
                            </div>
                            <div className={styles.projectInfo}>
                                <span className={styles.projectType}>{project.type}</span>
                                <h3>{project.title}</h3>
                                <div className={styles.projectMeta}>
                                    <span>📍 {project.location}</span>
                                    <span>📐 {project.area}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta} ref={ctaRef}>
                <h2>Interested In A Project?</h2>
                <p>Schedule a site visit or get in touch with our sales team for more details.</p>
                <Link to="/contact" className={styles.ctaBtn}>Contact Us →</Link>
            </section>
        </>
    );
};

export default Services;
