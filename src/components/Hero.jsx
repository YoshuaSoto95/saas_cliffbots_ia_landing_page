import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll';
import './Hero.css';

// --- ACTUALIZADO: Importa tus nuevas imágenes aquí ---
import chatbotDashboard from '../assets/interface.png'; // <- Cambia este nombre si tu imagen se llama diferente
import slackLogo from '../assets/slack-logo.png';
import zendeskLogo from '../assets/zendesk-logo.png';
import hubspotLogo from '../assets/hubspot-logo.png';
import intercomLogo from '../assets/intercom-logo.png';

const Hero = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    return (
        <section className="hero-section" id="hero">
            <div className="bubbles-background">
                <div className="bubble b1"></div>
                <div className="bubble b2"></div>
                <div className="bubble b3"></div>
                <div className="bubble b4"></div>
            </div>

            <motion.div
                className="hero-container"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                <div className="hero-content">
                    <motion.div className="hero-left" variants={itemVariants}>
                        {/* --- CONTENIDO ACTUALIZADO --- */}
                        <h1 className="hero-title">
                            <span className='animated-gradient-text'>Automate Conversations.</span> <span>Smarter.</span><span>Faster.</span> <span>Better.</span>
                        </h1>
                        <p className="hero-subtitle">
                            CliffBot IA helps your business deliver instant, personalized, and scalable customer support with AI-driven chatbots.
                        </p>
                        <div className="hero-cta-buttons">
                            <Link
                                to="pricing"
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="btn"
                            >
                                Get Started Now
                            </Link>
                            <button className="btn btn-secondary">See How It Works</button>
                        </div>
                    </motion.div>

                    <motion.div className="hero-right" variants={itemVariants}>
                        <img src={chatbotDashboard} alt="Chatbot Management Dashboard" className="dashboard-image" />
                    </motion.div>
                </div>

                <motion.div className="hero-trust" variants={itemVariants}>
                    {/* --- CONTENIDO ACTUALIZADO --- */}
                    <p className="trust-text">Trusted by leaders in customer experience & business automation.</p>
                    <div className="trust-logos">
                        <img src={slackLogo} alt="Slack" />
                        <img src={zendeskLogo} alt="Zendesk" />
                        <img src={hubspotLogo} alt="HubSpot" />
                        <img src={intercomLogo} alt="Intercom" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;