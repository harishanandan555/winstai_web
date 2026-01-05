import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-grid">
                <div className="footer-column">
                    <h4>WINSTAI</h4>
                    <p>AI-Powered Financial Intelligence</p>
                </div>

                <div className="footer-column">
                    <h4>Product</h4>
                    <a href="/#features">Features</a>
                    <a href="/#testimonials">Testimonials</a>
                    <a href="/#pricing">Pricing</a>
                </div>

                <div className="footer-column">
                    <h4>Company</h4>
                    <Link to="/about">About</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/careers">Careers</Link>
                </div>

                <div className="footer-column">
                    <h4>Legal</h4>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/cancellation">Refunds</Link>
                    <a href="/#contact">Contact</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 WINSTAI. Professional AI Stock Analysis for Everyone.</p>
            </div>
        </footer>
    );
};

export default Footer;
