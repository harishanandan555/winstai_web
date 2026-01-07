import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Download, ArrowRight, Lock, Sparkles } from 'lucide-react';
import '../styles/VideoSlideshow.css';

// Import video
import video1 from '../assets/banner_video.mp4';

// Import banner images
import banner1 from '../assets/banner/1.png';
import banner3 from '../assets/banner/3.png';
import banner5 from '../assets/banner/5.png';
import banner7 from '../assets/banner/7.png';

const VideoSlideshow = ({ onDownloadiOS, onDownloadAndroid }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPaused, setIsPaused] = useState(false);

    const slides = [
        {
            type: 'video',
            src: video1,
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
            src: banner1,
            badge: "", title: "", subtitle: "", description: "", stats: []
        },
        {
            type: 'image',
            src: banner3,
            badge: "", title: "", subtitle: "", description: "", stats: []
        },
        {
            type: 'image',
            src: banner5,
            badge: "", title: "", subtitle: "", description: "", stats: []
        },
        {
            type: 'image',
            src: banner7,
            badge: "", title: "", subtitle: "", description: "", stats: []
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
            {/* Background */}
            <div className="video-background">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`video-slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        {slide.type === 'video' ? (
                            null // No background video for video slides
                        ) : (
                            <img
                                src={slide.src}
                                alt={slide.title}
                                className="background-video" // Keeping same class for consistent styling
                                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                        )}
                        {slide.type === 'video' && <div className="video-overlay"></div>}
                    </div>
                ))}
            </div>

            {/* Mobile View Container (Separate from background) - Only for Video */}
            {slides[currentSlide].type === 'video' && (
                <div className="mobile-video-container">
                    <video
                        key={slides[currentSlide].src} // Key to force reload on slide change
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="mobile-video"
                    >
                        <source src={slides[currentSlide].src} type="video/mp4" />
                    </video>
                </div>
            )}

            {/* Hero Content Overlay */}
            <div className="hero-content-overlay">
                {slides.map((slide, index) => (
                    // Only render text content for video slides
                    slide.type === 'video' ? (
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
                    ) : null
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
