import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import './CTA.css';

const CTA = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    };

    return (
        <section className="cta-section">
            {/* Burbujas de fondo con animación más rápida */}
            <div className="cta-bubble cta-b1"></div>
            <div className="cta-bubble cta-b2"></div>

            <motion.div
                className="cta-container"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <motion.h2 className="cta-title" variants={itemVariants}>
                    Ready to transform customer engagement with AI?
                </motion.h2>
                <motion.p className="cta-subtitle" variants={itemVariants}>
                    Start automating conversations in minutes with CliffBots IA.
                </motion.p>
                <motion.div className="cta-buttons-container" variants={itemVariants}>
                    {/* Wrapper para el borde brillante animado */}
                    <div className="primary-cta-wrapper">
                        <Link
                            to="pricing"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="btn primary-cta"
                        >
                            Get Started Now 🚀
                        </Link>
                    </div>
                    <button className="btn secondary-cta">Learn More</button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default CTA;