import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Community.css';
import { FaDiscord, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Íconos de Font Awesome

const Community = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const communityData = [
        {
            icon: <FaDiscord />,
            text: "Chat with our dev team and users.",
            cta: "Join Discord",
            link: "#" // Reemplazar con el enlace real
        },
        {
            icon: <FaTwitter />,
            text: "Follow us for product news & AI insights.",
            cta: "Follow Us",
            link: "#"
        },
        {
            icon: <FaLinkedin />,
            text: "Be part of our professional AI network.",
            cta: "Connect",
            link: "#"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    const newsletterVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, delay: 0.5 } },
    };

    return (
        <section className="community-section">
            <motion.div
                className="community-container"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div className="community-header" variants={itemVariants}>
                    <h2 className="community-title">Join the growing CliffBots IA community.</h2>
                    <p className="community-subtitle">Connect with developers, businesses, and AI enthusiasts shaping the future of automation.</p>
                </motion.div>

                <div className="community-grid">
                    {communityData.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="community-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(125, 121, 255, 0.2)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="community-icon">{item.icon}</div>
                            <p className="community-text">{item.text}</p>
                            <span className="community-cta">{item.cta}</span>
                        </motion.a>
                    ))}
                </div>

                <motion.div className="newsletter-section" variants={newsletterVariants}>
                    <h3 className="newsletter-title">Stay ahead with our AI insights</h3>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" className="newsletter-input" />
                        <button type="submit" className="btn newsletter-btn">Subscribe</button>
                    </form>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default Community;