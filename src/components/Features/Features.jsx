import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faCode, faChartSimple, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Features.css';

const Features = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const featuresData = [
        {
            icon: <FontAwesomeIcon icon={faMicrochip} />,
            title: "AI Conversations",
            description: "Automate human-like, personalized conversations with our context-aware AI.",
        },
        {
            icon: <FontAwesomeIcon icon={faCode} />,
            title: "No-Code Builder",
            description: "Build, customize, and deploy sophisticated chatbots with our intuitive drag-and-drop interface.",
        },
        {
            icon: <FontAwesomeIcon icon={faChartSimple} />,
            title: "Advanced Analytics",
            description: "Track key metrics, user satisfaction, and conversation conversions to optimize performance.",
        },
        {
            icon: <FontAwesomeIcon icon={faLayerGroup} />,
            title: "Seamless Integrations",
            description: "Connect instantly with platforms you already use, like Slack, Zendesk, HubSpot, and more.",
        },
    ];

    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
    };

    // Animación para que los elementos entren desde la izquierda
    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section className="features-section" id="features">
            <motion.div
                className="features-container"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <div className="features-header">
                    <motion.h2 className="features-title" variants={itemVariants}>
                        AI-Powered Conversations. Seamless Integrations.
                    </motion.h2>
                    <motion.p className="features-subtitle" variants={itemVariants}>
                        Discover the core features that make CliffBot IA the smartest choice for your business automation needs.
                    </motion.p>
                </div>

                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <motion.div className="feature-card" key={index} variants={itemVariants}>
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Features;