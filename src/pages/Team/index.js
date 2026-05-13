import React from 'react';
import styles from './team.module.css';
import { useFadeUp, useStaggerUp } from '../../hooks/useGsap';

const teamMembers = [
    {
        id: 1,
        name: 'Michael Carter',
        role: 'Founder & CEO',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
        bio: 'Over 20 years of experience in luxury real estate.'
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        role: 'Senior Agent',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
        bio: 'Specializes in downtown commercial properties and high-rises.'
    },
    {
        id: 3,
        name: 'David Lee',
        role: 'Property Consultant',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
        bio: 'Passionate about helping first-time buyers find their dream homes.'
    },
    {
        id: 4,
        name: 'Emily Davis',
        role: 'Interior Designer',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
        bio: 'Brings out the best in every property with stunning staging.'
    }
];

const Team = () => {
    const heroRef = useFadeUp();
    const gridRef = useStaggerUp();

    return (
        <div className={styles.teamContainer}>
            {/* HERO */}
            <section className={styles.hero} ref={heroRef}>
                <h1>Meet Our Team</h1>
                <p>Our experienced professionals are here to guide you every step of the way.</p>
            </section>

            {/* TEAM GRID */}
            <section className={styles.gridSection}>
                <div className={styles.grid} ref={gridRef}>
                    {teamMembers.map((member) => (
                        <div className={styles.card} key={member.id}>
                            <div className={styles.imageWrapper}>
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className={styles.content}>
                                <h3>{member.name}</h3>
                                <span className={styles.role}>{member.role}</span>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Team;
