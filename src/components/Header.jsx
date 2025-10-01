import React, { useState } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion';
import iconLogo from '../assets/favicon.png';
import { Link } from 'react-scroll';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    // ... (el resto de la lógica se mantiene igual) ...
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const mobileMenuVariants = {
        hidden: { x: "100%" },
        visible: { x: 0, transition: { type: "tween", ease: "circOut" } },
        exit: { x: "100%", transition: { type: "tween", ease: "circIn" } }
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img className="favicon" src={iconLogo} alt="Logo" />
                    <a href="#">CliffBots IA</a>
                </div>
                <nav className="desktop-nav">
                    <Link to="features" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Features</Link>
                    <Link to="pricing" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Pricing</Link>
                    <Link to="comments" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Comments</Link>
                    <Link to="community" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Community</Link>
                    <Link to="faq" smooth={true} duration={500} offset={-80} onClick={closeMenu}>FAQ</Link>
                </nav>
                <div className="actions">
                    {/* 2. Reemplazar <button> por <Link> y añadir props de scroll */}
                    <Link
                        to="pricing"
                        smooth={true}
                        duration={500}
                        offset={-80} // Offset para compensar la altura del header
                        className="btn"
                    >
                        Get Started
                    </Link>
                </div>
                <div className="mobile-nav-toggle" onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-nav"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <nav>
                            <Link to="features" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Features</Link>
                            <Link to="pricing" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Pricing</Link>
                            <Link to="comments" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Comments</Link>
                            <Link to="community" smooth={true} duration={500} offset={-80} onClick={closeMenu}>Community</Link>
                            <Link to="faq" smooth={true} duration={500} offset={-80} onClick={closeMenu}>FAQ</Link>
                        </nav>
                        {/* 3. Reemplazar también el botón del menú móvil */}
                        <Link
                            to="pricing"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="btn get-started-btn-mobile"
                            onClick={toggleMenu} // Cierra el menú al hacer click
                        >
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;