import React from 'react';
import { Link } from 'react-router-dom';
import styles from './properties.module.css';
import { building, header1, header4 } from '../../assets';
import { useFadeUp, useStaggerUp } from '../../hooks/useGsap';

const propertiesList = [
    {
        id: 1,
        title: 'Luxury Villa',
        price: '$1,200,000',
        beds: 4,
        baths: 3,
        sqft: '3,500',
        address: '123 Palm Avenue, Beverly Hills',
        image: building,
        tag: 'For Sale'
    },
    {
        id: 2,
        title: 'Modern Apartment',
        price: '$4,500/mo',
        beds: 2,
        baths: 2,
        sqft: '1,200',
        address: '456 Downtown St, Metro City',
        image: header1,
        tag: 'For Rent'
    },
    {
        id: 3,
        title: 'Cozy Family Home',
        price: '$650,000',
        beds: 3,
        baths: 2,
        sqft: '2,100',
        address: '789 Suburbia Ln, Maplewood',
        image: header4,
        tag: 'For Sale'
    },
    {
        id: 4,
        title: 'Penthouse Suite',
        price: '$2,500,000',
        beds: 3,
        baths: 4,
        sqft: '4,000',
        address: '101 Skyline Blvd, Highrise City',
        image: building,
        tag: 'For Sale'
    },
    {
        id: 5,
        title: 'Studio Loft',
        price: '$2,000/mo',
        beds: 1,
        baths: 1,
        sqft: '800',
        address: '202 Arts District, Creativity City',
        image: header1,
        tag: 'For Rent'
    },
    {
        id: 6,
        title: 'Beachfront Estate',
        price: '$5,500,000',
        beds: 5,
        baths: 6,
        sqft: '7,000',
        address: '303 Ocean Dr, Seaside',
        image: header4,
        tag: 'For Sale'
    }
];

const Properties = () => {
    const heroRef = useFadeUp();
    const gridRef = useStaggerUp();

    return (
        <div className={styles.propertiesContainer}>
            {/* HERO */}
            <section className={styles.hero} ref={heroRef}>
                <h1>Find Your Dream Property</h1>
                <p>Browse our extensive collection of premium properties tailored for your lifestyle.</p>
            </section>

            {/* PROPERTIES GRID */}
            <section className={styles.gridSection}>
                <div className={styles.grid} ref={gridRef}>
                    {propertiesList.map((property) => (
                        <div className={styles.card} key={property.id}>
                            <div className={styles.imageWrapper}>
                                <img src={property.image} alt={property.title} />
                                <span className={styles.tag}>{property.tag}</span>
                            </div>
                            <div className={styles.content}>
                                <h3>{property.title}</h3>
                                <p className={styles.price}>{property.price}</p>
                                <p className={styles.address}>📍 {property.address}</p>
                                <div className={styles.features}>
                                    <span>🛏️ {property.beds} Beds</span>
                                    <span>🚿 {property.baths} Baths</span>
                                    <span>📐 {property.sqft} SqFt</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Properties;
