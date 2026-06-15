import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Lock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/VideoSlideshow.css';

// Import background
import backgroundBanner from '../assets/banner/banner.png';

// Import mobile phone images
import banner1 from '../assets/banner/webimages/Image1.png';
import banner2 from '../assets/banner/webimages/Image2.png';
import banner3 from '../assets/banner/webimages/Image3.png';
import banner4 from '../assets/banner/webimages/Image4.png';

const VideoSlideshow = ({ onDownloadiOS }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const slides = [
        {
            type: 'image',
            mobileSrc: banner1,
            badge: "Powered by Advanced AI",
            title: "Professional Stock Analysis",
            subtitle: "Evolved Beyond Human Limits",
            description: "Experience institutional-grade financial intelligence powered by neural networks trained on decades of market data. Make investment decisions with AI-backed confidence.",
            stats: [
                { value: "94%", label: "Prediction Accuracy" },
                { value: "24/7", label: "Market Monitoring" },
                { value: "10M+", label: "Data Points/Day" }
            ]
        },
        {
            type: 'image',
            mobileSrc: banner1,
            badge: "AI-Powered Insights",
            title: "Smart Stock Recommendations",
            subtitle: "Data-Driven Investment Decisions",
            description: "Get personalized stock recommendations powered by advanced AI algorithms. Our intelligent system analyzes market trends, company fundamentals, and real-time data to help you make informed investment choices.",
            stats: [
                { value: "500+", label: "Stocks Analyzed" },
                { value: "Real-time", label: "Market Updates" },
                { value: "AI-Driven", label: "Predictions" }
            ]
        },
        {
            type: 'image',
            mobileSrc: banner2,
            badge: "Portfolio Management",
            title: "Track Your Investments",
            subtitle: "Complete Portfolio Overview",
            description: "Monitor your entire investment portfolio in one place. Track performance, analyze gains and losses, and get detailed insights into your holdings with our comprehensive portfolio management tools.",
            stats: [
                { value: "Live", label: "Portfolio Tracking" },
                { value: "Detailed", label: "Analytics" },
                { value: "Multi-Asset", label: "Support" }
            ]
        },
        {
            type: 'image',
            mobileSrc: banner3,
            badge: "Market Intelligence",
            title: "Advanced Market Analysis",
            subtitle: "Stay Ahead of the Market",
            description: "Access institutional-grade market analysis and insights. Our AI-powered platform provides deep market intelligence, sector analysis, and trend predictions to keep you ahead of the curve.",
            stats: [
                { value: "24/7", label: "Market Monitoring" },
                { value: "Global", label: "Market Coverage" },
                { value: "Expert", label: "Analysis" }
            ]
        },
        {
            type: 'image',
            mobileSrc: banner4,
            badge: "Risk Management",
            title: "Intelligent Risk Assessment",
            subtitle: "Invest with Confidence",
            description: "Make safer investment decisions with our advanced risk assessment tools. Our AI evaluates risk factors, volatility patterns, and market conditions to help you build a balanced and secure portfolio.",
            stats: [
                { value: "Smart", label: "Risk Analysis" },
                { value: "Automated", label: "Alerts" },
                { value: "Secure", label: "Platform" }
            ]
        }
    ];

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000); // Change slide every 8 seconds

        return () => clearInterval(interval);
    }, [isPlaying, slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="video-slideshow-fullwidth">
            {/* Static Background */}
            <div className="video-background">
                <div className="video-slide active">
                    <img
                        src={backgroundBanner}
                        alt="Background"
                        className="background-video"
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>
            </div>

            {/* Mobile Phone Container - Shows images for all slides */}
            <div className="mobile-video-container">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.mobileSrc}
                        alt={slide.title}
                        className={`mobile-video ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 1s ease-in-out'
                        }}
                    />
                ))}
            </div>

            {/* Hero Content Overlay */}
            <div className="hero-content-overlay">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-content ${index === currentSlide ? 'active' : ''}`}
                    >
                        <div className="hero-badge">
                            <Sparkles className="badge-icon" />
                            <span>{slide.badge}</span>
                        </div>

                        <h1 className="hero-title">
                            <span className="title-line-1">{slide.title}</span>
                            <span className="title-line-2 gradient-text">{slide.subtitle}</span>
                        </h1>

                        <p className="hero-description">{slide.description}</p>

                        <div className="hero-stats">
                            {slide.stats.map((stat, idx) => (
                                <div key={idx} className="stat-item">
                                    <div className="stat-value">{stat.value}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <button className="nav-arrow prev-arrow" onClick={prevSlide}>
                <ChevronLeft size={32} />
            </button>
            <button className="nav-arrow next-arrow" onClick={nextSlide}>
                <ChevronRight size={32} />
            </button>

            {/* Bottom Download Buttons - For All Slides */}
            <div className="bottom-download-section">
                <div className="bottom-buttons">
                    <button className="btn btn-primary btn-large" onClick={onDownloadiOS}>
                        <Download size={20} />
                        Download for iOS
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoSlideshow;
