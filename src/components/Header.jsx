import React from 'react';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import '../styles/Header.css';
import winstaiLogo from '../assets/winstai-logo.png';

const Header = () => {
    const handleDownloadiOS = () => {
        window.open('https://apps.apple.com/app/winstai-stock-analyzer', '_blank');
    };

    return (
        <nav className="app-header">
            <div className="nav-container">
                <Link to="/" className="logo">
                    <img src={winstaiLogo} alt="WinstAI Logo" style={{ height: '40px', borderRadius: '8px' }} />

                </Link>

                <div className="nav-links">
                    <a href="/#features" className="nav-link">Features</a>
                    <a href="/#testimonials" className="nav-link">Testimonials</a>
                    <a href="/#pricing" className="nav-link">Pricing</a>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/privacy" className="nav-link">Privacy</Link>
                    <Link to="/terms" className="nav-link">Terms</Link>
                </div>

                <button className="nav-cta" onClick={handleDownloadiOS}>
                    <Download size={18} />
                    Download App
                </button>
            </div>
        </nav>
    );
};

export default Header;
