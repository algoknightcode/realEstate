import React from 'react';
import { Link } from 'react-router-dom';
import styles from './blog.module.css';
import { building, header1, header4 } from '../../assets';
import { useFadeUp, useStaggerUp } from '../../hooks/useGsap';

const blogPosts = [
    {
        id: 1,
        title: 'Top 10 Real Estate Trends in 2024',
        excerpt: 'Discover what is shaping the housing market this year, from sustainable living to smart home integrations.',
        date: 'Oct 12, 2023',
        author: 'Jane Doe',
        image: building
    },
    {
        id: 2,
        title: 'How to Choose the Right Neighborhood',
        excerpt: 'A comprehensive guide on evaluating schools, commute times, and local amenities before making a purchase.',
        date: 'Sep 28, 2023',
        author: 'John Smith',
        image: header1
    },
    {
        id: 3,
        title: 'The Ultimate Guide to Real Estate Investment',
        excerpt: 'Learn the basics of flipping houses, rental properties, and REITs to diversify your portfolio.',
        date: 'Sep 15, 2023',
        author: 'Alice Johnson',
        image: header4
    }
];

const Blog = () => {
    const heroRef = useFadeUp();
    const gridRef = useStaggerUp();

    return (
        <div className={styles.blogContainer}>
            {/* HERO */}
            <section className={styles.hero} ref={heroRef}>
                <h1>Real Estate Insights</h1>
                <p>Stay updated with our latest news, market trends, and investment tips.</p>
            </section>

            {/* BLOG GRID */}
            <section className={styles.gridSection}>
                <div className={styles.grid} ref={gridRef}>
                    {blogPosts.map((post) => (
                        <article className={styles.card} key={post.id}>
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span>📅 {post.date}</span>
                                    <span>✍️ {post.author}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <button className={styles.readMore}>Read More →</button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
