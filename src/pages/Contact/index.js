import { useState } from 'react';
import styles from './contact.module.css';
import { useFadeUp, useStaggerUp } from '../../hooks/useGsap';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const heroRef = useFadeUp();
    const formRef = useFadeUp({ delay: 0.2 });
    const infoRef = useStaggerUp();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <>
            {/* HERO */}
            <section className={styles.hero} ref={heroRef}>
                <h1>Get In Touch</h1>
                <p>
                    Have a question about our projects or want to schedule a site visit?
                    We'd love to hear from you.
                </p>
            </section>

            {/* CONTACT SECTION */}
            <section className={styles.contactSection}>
                {/* INFO CARDS */}
                <div className={styles.infoCards} ref={infoRef}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><FaMapMarkerAlt /></div>
                        <h3>Visit Us</h3>
                        <p>Mansha Group, Sector 84,<br />Faridabad, Haryana 121002</p>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><FaPhoneAlt /></div>
                        <h3>Call Us</h3>
                        <p>+91 98XXX XXXXX<br />+91 11-XXXX-XXXX</p>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><FaEnvelope /></div>
                        <h3>Email Us</h3>
                        <p>info@manshagroup.com<br />sales@manshagroup.com</p>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><FaClock /></div>
                        <h3>Working Hours</h3>
                        <p>Mon – Sat: 10 AM – 7 PM<br />Sunday: By Appointment</p>
                    </div>
                </div>

                {/* FORM */}
                <div className={styles.formWrapper} ref={formRef}>
                    <h2>Send Us A Message</h2>
                    <p className={styles.formSubtitle}>
                        Fill out the form below and our team will respond within 24 hours.
                    </p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles.row}>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Subject *</option>
                                <option value="residential">Residential Project</option>
                                <option value="commercial">Commercial Project</option>
                                <option value="site-visit">Schedule Site Visit</option>
                                <option value="general">General Inquiry</option>
                            </select>
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message *"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className={styles.submitBtn}>
                            Send Message →
                        </button>
                    </form>
                </div>
            </section>

            {/* MAP */}
            <section className={styles.mapSection}>
                <iframe
                    title="Mansha Group Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.2!2d77.31!3d28.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzM2LjAiTiA3N8KwMTgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </>
    );
};

export default Contact;
