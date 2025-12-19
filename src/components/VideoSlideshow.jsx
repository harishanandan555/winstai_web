import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Download, ArrowRight, Lock, Sparkles } from 'lucide-react';
import '../styles/VideoSlideshow.css';

// Import all videos
import video1 from '../assets/banner_video.mp4';
import video2 from '../assets/WinstAI Video2.mp4';
import video3 from '../assets/WinstAI Video3.mp4';
import video4 from '../assets/WinstAI Video4.mp4';

const VideoSlideshow = ({ onDownloadiOS, onDownloadAndroid }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            video: video1,
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
            video: video2,
            badge: "Professional Grade Tools",
            title: "Advanced Charting",
            subtitle: "Institutional-Level Analysis",
            description: "Access professional charting tools with 50+ technical indicators, advanced drawing tools, and customizable timeframes. Visualize market trends like never before.",
            stats: [
                { value: "50+", label: "Technical Indicators" },
                { value: "Real-time", label: "Data Streaming" },
                { value: "∞", label: "Watchlists" }
            ]
        },
        {
            video: video3,
            badge: "Lightning Fast Performance",
            title: "Real-Time Monitoring",
            subtitle: "Never Miss an Opportunity",
            description: "Stay ahead with sub-millisecond data streaming and instant notifications. Our AI monitors markets 24/7 so you don't have to, alerting you to critical opportunities.",
            stats: [
                { value: "<1ms", label: "Data Latency" },
                { value: "24/7", label: "AI Monitoring" },
                { value: "Instant", label: "Notifications" }
            ]
        },
        {
            video: video4,
            badge: "AI-Powered Insights",
            title: "Smart Portfolio Management",
            subtitle: "Personalized for Your Goals",
            description: "Optimize your investments with AI-driven recommendations tailored to your risk profile and financial goals. Let machine learning work for your wealth.",
            stats: [
                { value: "AI", label: "Recommendations" },
                { value: "Custom", label: "Risk Profiles" },
                { value: "Auto", label: "Rebalancing" }
            ]
        }
    ];

    useEffect(() => {
        if (!isPlaying || isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000); // Change slide every 8 seconds

        return () => clearInterval(interval);
    }, [isPlaying, isPaused, slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const togglePlayPause = () => {
        setIsPaused(!isPaused);
    };

    return (
        <div className="video-slideshow-fullwidth">
            {/* Video Background */}
            <div className="video-background">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`video-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="background-video"
                        >
                            <source src={slide.video} type="video/mp4" />
                        </video>
                        <div className="video-overlay"></div>
                    </div>
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

                        <div className="hero-buttons">
                            <button className="btn btn-primary btn-large" onClick={onDownloadiOS}>
                                <Download size={20} />
                                Download for iOS
                                <ArrowRight size={18} />
                            </button>
                            <button className="btn btn-secondary btn-large" onClick={onDownloadAndroid}>
                                <Download size={20} />
                                Download for Android
                                <ArrowRight size={18} />
                            </button>
                        </div>

                        <div className="trust-badge">
                            <Lock size={16} />
                            <span>256-bit Enterprise Security • Biometric Auth</span>
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

            {/* Bottom Controls */}
            <div className="slideshow-controls">
                <button className="play-pause-btn" onClick={togglePlayPause}>
                    {isPaused ? <Play size={20} /> : <Pause size={20} />}
                </button>

                <div className="slide-indicators">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        >
                            <span className="indicator-progress"></span>
                        </button>
                    ))}
                </div>

                <div className="slide-counter">
                    <span className="current-slide">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="separator">/</span>
                    <span className="total-slides">{String(slides.length).padStart(2, '0')}</span>
                </div>
            </div>
        </div>
    );
};

export default VideoSlideshow;
