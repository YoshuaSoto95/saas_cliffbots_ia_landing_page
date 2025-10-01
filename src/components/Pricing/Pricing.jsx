import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Pricing.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Íconos para las features

const Pricing = ({ openModal }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const pricingData = [
        {
            plan: "Starter",
            price: "29",
            features: [
                { text: "1 chatbot", available: true },
                { text: "1,000 messages / mo", available: true },
                { text: "Basic AI responses", available: true },
                { text: "No analytics", available: false },
            ],
            buttonText: "Choose Starter",
            isPopular: false,
        },
        {
            plan: "Pro",
            price: "79",
            features: [
                { text: "5 chatbots", available: true },
                { text: "50,000 messages / mo", available: true },
                { text: "Smart AI responses", available: true },
                { text: "Performance analytics", available: true },
            ],
            buttonText: "Choose Pro",
            isPopular: true,
        },
        {
            plan: "Enterprise",
            price: "199",
            features: [
                { text: "Unlimited chatbots", available: true },
                { text: "Unlimited messages", available: true },
                { text: "Custom-trained AI", available: true },
                { text: "Advanced analytics + support", available: true },
            ],
            buttonText: "Choose Enterprise",
            isPopular: false,
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section className="pricing-section" id="pricing">
            <motion.div
                className="pricing-container"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.div className="pricing-header" variants={headerVariants}>
                    <h2 className="pricing-title">Pricing Plans</h2>
                    <p className="pricing-subtitle">Choose the plan that fits your business.</p>
                </motion.div>

                <div className="pricing-grid">
                    {pricingData.map((p, index) => (
                        <motion.div
                            key={index}
                            className={`pricing-card ${p.isPopular ? 'popular' : ''}`}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {p.isPopular && (
                                <motion.div
                                    className="popular-badge"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                                >
                                    Most Popular 🚀
                                </motion.div>
                            )}
                            <h3 className="plan-name">{p.plan}</h3>
                            <p className="plan-price">${p.price}<span className="price-period"> / month</span></p>
                            <ul className="features-list">
                                {p.features.map((feature, i) => (
                                    <li key={i} className={!feature.available ? 'unavailable' : ''}>
                                        {feature.available
                                            ? <FaCheckCircle className="icon-check" />
                                            : <FaTimesCircle className="icon-cross" />}
                                        <span>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="btn pricing-btn"
                                onClick={() => openModal(p)} // 'p' es el objeto del plan actual
                            >
                                {p.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Pricing;