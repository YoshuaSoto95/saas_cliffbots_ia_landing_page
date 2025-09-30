import React from 'react';
import { Link } from 'react-scroll'; // Para navegación interna suave
import './Footer.css';
import { FaDiscord, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Columna 1: Logo y Descripción */}
                    <div className="footer-col brand-col">
                        <h3 className="footer-logo">CliffBots IA</h3>
                        <p className="footer-desc">
                            Transforming customer engagement with smarter, faster, and better AI-powered chatbots.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="#" aria-label="Discord"><FaDiscord /></a>
                            <a href="#" aria-label="GitHub"><FaGithub /></a>
                        </div>
                    </div>

                    {/* Columna 2: Producto (Enlaces internos) */}
                    <div className="footer-col">
                        <h4>Product</h4>
                        <ul>
                            <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
                            <li><Link to="pricing" smooth={true} duration={500}>Pricing</Link></li>
                            <li><Link to="faq" smooth={true} duration={500}>FAQ</Link></li>
                            <li><a href="#">API Docs</a></li>
                        </ul>
                    </div>

                    {/* Columna 3: Compañía */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Columna 4: Legal */}
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">GDPR</a></li>
                        </ul>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="footer-bottom">
                    <p>&copy; {currentYear} CliffBots IA. All rights reserved.</p>
                    <p>Made with 🤖 & ❤️ for the future.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;