import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Lock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/VideoSlideshow.css';

// Import background
import backgroundBanner from '../assets/banner/banner.png';

// Import mobile phone images
import pic1 from '../assets/banner/webimages/Pic1.png';
import pic2 from '../assets/banner/webimages/Pic2.png';
import pic3 from '../assets/banner/webimages/Pic3.png';
import pic4 from '../assets/banner/webimages/Pic4.png';

const VideoSlideshow = ({ onDownloadiOS }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const slides = [
        {
            type: 'image',
            mobileSrc: pic1,
            badge: "AI-POWERED STOCK ANALYSIS",
            title: "Understand Stocks. Go Deeper.",
            subtitle: "Powerful Analysis. One Intelligent Platform.",
            description: "Explore stocks through AI-powered analysis of market data, company fundamentals, technical indicators and key financial metrics — all in one place.",
            stats: [
                { value: "500+", label: "Stocks Analyzed" },
                { value: "10M+", label: "Data Points" },
                { value: "Real-Time", label: "Market Data" }
            ]
        },
        {
            type: 'image',
            mobileSrc: pic2,
            badge: "AI-POWERED INSIGHTS",
            title: "Turn Market Data Into Clear Insights",
            subtitle: "Analysis That Helps You Understand the Bigger Picture",
            description: "WinstAI brings together market trends, financial data and company information to help you explore stocks, identify key factors and understand what matters.",
            stats: [
                { value: "AI-Powered", label: "Analysis" },
                { value: "Real-Time", label: "Market Updates" },
                { value: "Multi-Factor", label: "Insights" }
            ]
        },
        {
            type: 'image',
            mobileSrc: pic3,
            badge: "PORTFOLIO INSIGHTS",
            title: "Your Portfolio. One Complete View.",
            subtitle: "Track. Analyze. Understand.",
            description: "Monitor your holdings in one place. Review portfolio performance, explore gains and losses, and get detailed insights across your investments.",
            stats: [
                { value: "Live", label: "Portfolio Tracking" },
                { value: "Detailed", label: "Performance Analysis" },
                { value: "Multi-Asset", label: "Support" }
            ]
        },
        {
            type: 'image',
            mobileSrc: pic4,
            badge: "REAL-TIME MARKET INTELLIGENCE",
            title: "Stay Informed. Understand the Market.",
            subtitle: "The Data You Need. The Insights That Matter.",
            description: "Stay connected to market movements with real-time data, stock analysis, financial metrics and AI-powered insights designed to make complex market information easier to understand.",
            stats: [
                { value: "Real-Time", label: "Market Data" },
                { value: "Deep", label: "Stock Analysis" },
                { value: "AI-Powered", label: "Insights" }
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
