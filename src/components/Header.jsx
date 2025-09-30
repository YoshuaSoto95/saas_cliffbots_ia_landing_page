import React, { useState } from 'react';
import './Header.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import iconLogo from '../assets/favicon.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // ACTUALIZADO: Variantes para animación desde la derecha
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
                    <Link to="features" smooth={true} duration={500} onClick={closeMenu}>Features</Link>
                    <Link to="comments" smooth={true} duration={500} onClick={closeMenu}>Comments</Link>
                    <Link to="pricing" smooth={true} duration={500} onClick={closeMenu}>Pricing</Link>
                    <Link to="community" smooth={true} duration={500} onClick={closeMenu}>Community</Link>
                    <Link to="faq" smooth={true} duration={500} onClick={closeMenu}>FAQ</Link>
                </nav>
                <div className="actions">
                    <button className="btn">Get Started</button>
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
                            <Link to="features" smooth={true} duration={500} onClick={toggleMenu}>Features</Link>
                            <Link to="comments" smooth={true} duration={500} onClick={toggleMenu}>Comments</Link>
                            <Link to="pricing" smooth={true} duration={500} onClick={toggleMenu}>Pricing</Link>
                            <Link to="community" smooth={true} duration={500} onClick={toggleMenu}>Community</Link>
                            <Link to="faq" smooth={true} duration={500} onClick={toggleMenu}>FAQ</Link>
                        </nav>
                        <button className="btn get-started-btn-mobile">Get Started</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;