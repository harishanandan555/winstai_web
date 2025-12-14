import React, { useState, useEffect } from 'react';
import {
  Download,
  Smartphone,
  TrendingUp,
  BarChart3,
  Brain,
  Zap,
  ArrowRight,
  Shield,
  Lightbulb,
  Star,
  ChevronDown,
  Sparkles,
  Lock,
  Cpu,
  Wind,
  Activity
} from 'lucide-react';
import '../styles/LandingPage.css';
import bannerVideo from '../assets/banner_video.mp4';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadiOS = () => {
    window.open('https://apps.apple.com/app/winstai-stock-analyzer', '_blank');
  };

  const handleDownloadAndroid = () => {
    window.open('https://play.google.com/store/apps/details?id=com.winstai.stockanalyzer', '_blank');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Brain,
      title: "Neural AI Engine",
      description: "Advanced machine learning powered by neural networks analyzes millions of data points in milliseconds to predict market movements with 94% accuracy.",
      color: "cyan"
    },
    {
      icon: BarChart3,
      title: "Professional Charts",
      description: "Institutional-grade charting with 50+ technical indicators, advanced drawing tools, and customizable timeframes from 1-minute to yearly.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "AI-powered trend predictions with confidence scores. Get ahead of market moves with our proprietary forecasting models.",
      color: "orange"
    },
    {
      icon: Zap,
      title: "Real-Time Streaming",
      description: "Sub-millisecond latency data streaming with zero delays. See market movements as they happen, giving you an edge over competitors.",
      color: "red"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade 256-bit encryption, biometric authentication, and multi-factor security protocols protect your portfolio.",
      color: "cyan"
    },
    {
      icon: Cpu,
      title: "AI Recommendations",
      description: "Personalized investment suggestions powered by your risk profile, goals, and market conditions using deep learning models.",
      color: "green"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Chen",
      title: "Investment Advisor",
      text: "WINSTAI has revolutionized how I advise my clients. The AI predictions are eerily accurate, and the interface is intuitive.",
      avatar: "MC"
    },
    {
      name: "Sarah Mitchell",
      title: "Day Trader",
      text: "The real-time insights and notifications have consistently improved my trading performance. ROI up by 34% in 3 months.",
      avatar: "SM"
    },
    {
      name: "David Park",
      title: "Portfolio Manager",
      text: "Professional-grade analysis in your pocket. This replaces thousands of dollars in Bloomberg terminals with better insights.",
      avatar: "DP"
    }
  ];

  return (
    <div className="landing-page">
      {/* Animated Background */}

      {/* Premium Navigation */}
      <nav className="premium-nav">
        <div className="nav-container">
          <div className="logo">
            <div className="logo-glow">
              <Brain className="logo-icon" />
            </div>
            <div>
              <span className="logo-text">WINSTAI</span>
              <span className="logo-badge">Pro</span>
            </div>
          </div>

          <div className="nav-links">
            <button onClick={() => scrollToSection('features')} className="nav-link">
              Features
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">
              Pricing
            </button>
          </div>

          <button className="nav-cta" onClick={handleDownloadiOS}>
            <Download size={18} />
            Download App
          </button>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="premium-hero">
        <div className="hero-grid">
          <div className="hero-left">
            <div className="hero-badge">
              <Sparkles className="badge-icon" />
              <span>Powered by Advanced AI</span>
            </div>

            <h1 className="hero-title">
              <span className="title-line-1">Professional Stock Analysis</span>
              <span className="title-line-2 gradient-text">Evolved Beyond Human Limits</span>
            </h1>

            <p className="hero-description">
              Experience institutional-grade financial intelligence powered by neural networks trained on decades of market data. Make investment decisions with AI-backed confidence.
            </p>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">94%</div>
                <div className="stat-label">Prediction Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">24/7</div>
                <div className="stat-label">Market Monitoring</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">10M+</div>
                <div className="stat-label">Data Points/Day</div>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary btn-large" onClick={handleDownloadiOS}>
                <Download size={20} />
                Download for iOS
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-secondary btn-large" onClick={handleDownloadAndroid}>
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

          <div className="hero-right">
            <div className="video-showcase" style={{
              width: '100%',
              height: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 212, 255, 0.2)',
              border: '1px solid rgba(0, 212, 255, 0.1)'
            }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src={bannerVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <ChevronDown className="chevron-animate" />
        </div>
      </section>

      {/* Premium Features */}
      <section id="features" className="premium-features">
        <div className="features-header">
          <h2>Institutional-Grade Technology</h2>
          <p>Professional tools that used to cost thousands per month, now in your pocket</p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={`premium-feature-card color-${feature.color}`}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="feature-glow"></div>

                <div className="feature-header">
                  <div className={`feature-icon color-${feature.color}`}>
                    <Icon size={32} />
                  </div>
                  <h3>{feature.title}</h3>
                </div>

                <p className="feature-description">{feature.description}</p>

                <div className="feature-footer">
                  <div className="feature-indicator"></div>
                  <span>Enterprise Grade</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technical Specs */}
      <section className="tech-specs">
        <div className="specs-container">
          <h2>Built for Performance</h2>

          <div className="specs-grid">
            <div className="spec-card">
              <Cpu className="spec-icon" />
              <h4>Sub-Millisecond Latency</h4>
              <p>Real-time data streaming with zero delays. See market movements as they happen.</p>
            </div>

            <div className="spec-card">
              <Wind className="spec-icon" />
              <h4>99.99% Uptime SLA</h4>
              <p>Enterprise-grade infrastructure ensures markets never catch you offline.</p>
            </div>

            <div className="spec-card">
              <Lock className="spec-icon" />
              <h4>Military-Grade Security</h4>
              <p>256-bit encryption, biometric auth, and multi-factor protection for peace of mind.</p>
            </div>

            <div className="spec-card">
              <Activity className="spec-icon" />
              <h4>10M+ Data Points Daily</h4>
              <p>Analyzed by our AI to identify patterns human traders miss.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section">
        <h2>Trusted by Professional Traders</h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-title">{testimonial.title}</div>
                </div>
              </div>

              <div className="star-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>

              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2>Simple, Transparent Pricing</h2>
        <p className="pricing-subtitle">All features available on both iOS and Android</p>

        <div className="pricing-cards">
          <div className="pricing-card starter">
            <div className="pricing-name">Essential</div>
            <div className="pricing-price">
              <span>Free</span>
            </div>
            <p className="pricing-description">Perfect for beginners</p>
            <ul className="pricing-features">
              <li>Real-time stock quotes</li>
              <li>Basic charting</li>
              <li>1 watchlist</li>
              <li>Daily market analysis</li>
            </ul>
            <button className="btn btn-secondary">Get Started</button>
          </div>

          <div className="pricing-card professional">
            <div className="pricing-badge">Most Popular</div>
            <div className="pricing-name">Professional</div>
            <div className="pricing-price">
              <span>$9.99</span>
              <span className="period">/month</span>
            </div>
            <p className="pricing-description">For active traders</p>
            <ul className="pricing-features">
              <li>All Essential features</li>
              <li>AI-powered predictions</li>
              <li>Unlimited watchlists</li>
              <li>Advanced technical indicators</li>
              <li>Priority support</li>
            </ul>
            <button className="btn btn-primary">Start Free Trial</button>
          </div>

          <div className="pricing-card enterprise">
            <div className="pricing-name">Enterprise</div>
            <div className="pricing-price">
              <span>Custom</span>
            </div>
            <p className="pricing-description">For institutions</p>
            <ul className="pricing-features">
              <li>All Professional features</li>
              <li>Custom AI models</li>
              <li>Dedicated account manager</li>
              <li>White-label options</li>
              <li>API access</li>
            </ul>
            <button className="btn btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <h2>Why Choose WINSTAI?</h2>
        <div className="comparison-table">
          <div className="table-header">
            <div className="table-cell">Feature</div>
            <div className="table-cell">WINSTAI</div>
            <div className="table-cell">Traditional Platforms</div>
          </div>

          <div className="table-row">
            <div className="table-cell">AI-Powered Analysis</div>
            <div className="table-cell"><Sparkles size={20} className="check" /></div>
            <div className="table-cell">×</div>
          </div>

          <div className="table-row">
            <div className="table-cell">Mobile-First Design</div>
            <div className="table-cell"><Sparkles size={20} className="check" /></div>
            <div className="table-cell">×</div>
          </div>

          <div className="table-row">
            <div className="table-cell">Real-Time Notifications</div>
            <div className="table-cell"><Sparkles size={20} className="check" /></div>
            <div className="table-cell">Basic</div>
          </div>

          <div className="table-row">
            <div className="table-cell">Cost</div>
            <div className="table-cell">From Free</div>
            <div className="table-cell">$2000+/month</div>
          </div>
        </div>
      </section>

      {/* Premium CTA */}
      <section className="premium-cta">
        <div className="cta-content">
          <h2>Join 500K+ Professional Traders</h2>
          <p>Start making smarter investment decisions today with AI-powered market intelligence</p>

          <div className="cta-button-group">
            <button className="btn btn-primary btn-xl" onClick={handleDownloadiOS}>
              Download for iOS
              <ArrowRight size={20} />
            </button>
            <button className="btn btn-secondary btn-xl" onClick={handleDownloadAndroid}>
              Download for Android
              <ArrowRight size={20} />
            </button>
          </div>

          <div className="cta-benefits">
            <div className="benefit">
              <span>✓</span>
              <span>Free to download and use</span>
            </div>
            <div className="benefit">
              <span>✓</span>
              <span>Premium features 14-day trial</span>
            </div>
            <div className="benefit">
              <span>✓</span>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="premium-footer">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>WINSTAI</h4>
            <p>AI-Powered Financial Intelligence</p>
          </div>

          <div className="footer-column">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#blog">Blog</a>
            <a href="#careers">Careers</a>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/cancellation">Refunds</Link>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 WINSTAI. Professional AI Stock Analysis for Everyone.</p>
        </div>
      </footer>
    </div>
  );
}
