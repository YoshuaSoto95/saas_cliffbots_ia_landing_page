import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './UseCases.css';

// --- ACTUALIZADO: Todos los íconos ahora se importan desde 'react-icons/fa' (Font Awesome) ---
import { FaShoppingCart, FaUniversity, FaHeartbeat, FaCode, FaCheckCircle } from 'react-icons/fa';

const UseCases = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const useCasesData = [
        {
            icon: <FaShoppingCart />,
            title: "E-commerce",
            bullets: ["Automate product FAQs", "Recover abandoned carts", "Provide real-time order tracking"],
        },
        {
            icon: <FaUniversity />,
            title: "Finance & Banking",
            bullets: ["Offer 24/7 account support", "Assist in fraud detection", "Streamline loan applications"],
        },
        {
            icon: <FaHeartbeat />,
            title: "Healthcare",
            bullets: ["Simplify appointment booking", "Automate patient follow-ups", "Provide virtual assistance"],
        },
        {
            icon: <FaCode />,
            title: "SaaS & Tech Support",
            bullets: ["Deliver instant onboarding guides", "Automate support ticket creation", "Power your knowledge base with AI"],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section className="use-cases-section">
            <div className="diffuse-bubble db1"></div>
            <div className="diffuse-bubble db2"></div>

            <motion.div
                className="use-cases-container"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div className="use-cases-header" variants={cardVariants}>
                    <h2 className="use-cases-title">Solutions by Industry</h2>
                    <p className="use-cases-subtitle">See how CliffBots IA adapts to your business.</p>
                </motion.div>

                <div className="cases-grid">
                    {useCasesData.map((caseItem, index) => (
                        <motion.div className="case-card" key={index} variants={cardVariants}>
                            <div className="case-icon">{caseItem.icon}</div>
                            <h3 className="case-title">{caseItem.title}</h3>
                            <ul className="case-bullets">
                                {caseItem.bullets.map((bullet, i) => (
                                    <li key={i}>
                                        {/* --- ACTUALIZADO: Usamos el ícono FaCheckCircle --- */}
                                        <FaCheckCircle className="bullet-icon" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div className="cases-cta-container" variants={cardVariants}>
                    <button className="btn cases-cta">Discover More Industries</button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default UseCases;