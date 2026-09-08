import React, { useState, useEffect } from 'react';
import {
  Download,
  TrendingUp,
  BarChart3,
  Brain,
  Zap,
  ArrowRight,
  Shield,
  ChevronDown,
  Check,
  Cpu,
  Users
} from 'lucide-react';
import '../styles/LandingPage.css';
import VideoSlideshow from './VideoSlideshow';
import { Link } from 'react-router-dom';
import winstaiLogo from '../assets/winstai-logo.png';

import Footer from './Footer';

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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Brain,
      title: "AI Analysis Engine",
      description: "Advanced AI models analyze financial, market and company data to generate clear, structured insights across multiple factors.",
      color: "cyan"
    },
    {
      icon: BarChart3,
      title: "Professional Charts",
      description: "Explore price movements with advanced charts, 50+ technical indicators, drawing tools and customizable timeframes from 1-minute to yearly.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Bring together market trends, sector activity, price movements and key market data to better understand changing market conditions.",
      color: "orange"
    },
    {
      icon: Zap,
      title: "Real-Time Market Data",
      description: "Access continuously updated market data and track price movements, market activity and key indicators as they change.",
      color: "red"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Built with modern security practices, including 256-bit encryption, biometric authentication and multi-factor security controls to help protect your account and data.",
      color: "cyan"
    },
    {
      icon: Cpu,
      title: "AI-Powered Insights",
      description: "Explore personalized insights based on your selected stocks, portfolio information, market data and analytical preferences.",
      color: "green"
    }
  ];

  return (
    <div className="landing-page">
      {/* Animated Background */}

      {/* Premium Navigation */}
      <nav className="premium-nav">
        <div className="nav-container">
          <div className="logo">
            <img src={winstaiLogo} alt="WinstAI Logo" style={{ height: '40px', borderRadius: '8px' }} />

          </div>

          <div className="nav-links">
            <button onClick={() => scrollToSection('features')} className="nav-link">
              Features
            </button>
            <button onClick={() => scrollToSection('research')} className="nav-link">
              Research
            </button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">
              Pricing
            </button>
            <Link to="/blog" className="nav-link" style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog
            </Link>
          </div>

          <button className="nav-cta" onClick={handleDownloadiOS}>
            <Download size={18} />
            Download App
          </button>
        </div>
      </nav>

      {/* Premium Hero Section */}
      <section className="premium-hero">
        <VideoSlideshow
          onDownloadiOS={handleDownloadiOS}
        />

        <div className="scroll-indicator">
          <ChevronDown className="chevron-animate" />
        </div>
      </section>

      {/* Premium Features */}
      <section id="features" className="premium-features">
        <div className="features-header">
          <h2>Built for Intelligent Market Analysis</h2>
          <p>Modern technology designed to bring market data, analysis and insights together in one powerful platform.</p>
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

      {/* Research */}
      <section id="research" className="research-section">
        <h2>Designed for Smarter Market Research</h2>
        <p className="research-subtitle">Bring complex market information together in one place.</p>

        <div className="research-grid">
          <div className="research-card">
            <Brain className="research-icon" />
            <h3>AI-Powered Analysis</h3>
            <p>Explore stocks using AI-assisted analysis across market data, financials, technical indicators and company information.</p>
          </div>

          <div className="research-card">
            <BarChart3 className="research-icon" />
            <h3>Comprehensive Market Insights</h3>
            <p>Understand price movements, financial performance, technical trends and broader market conditions from multiple perspectives.</p>
          </div>

          <div className="research-card">
            <Users className="research-icon" />
            <h3>Built for Investors</h3>
            <p>Research stocks, monitor portfolios and explore market information through a single, intuitive platform.</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <h2>Simple, Transparent Pricing</h2>
        <p className="pricing-subtitle">Choose the plan that fits your market research needs.</p>

        <div className="pricing-cards">
          <div className="pricing-card starter">
            <div className="pricing-name">Free</div>
            <div className="pricing-price">
              <span>$0</span>
            </div>
            <p className="pricing-description">Start exploring Winst AI with 20,000 AI tokens</p>
            <ul className="pricing-features">
              <li>20,000 AI tokens on sign-up</li>
              <li>Earn additional tokens by watching ads</li>
              <li>Real-time stock quotes & charting</li>
              <li>AI-powered market analysis</li>
              <li>Ad-supported experience</li>
            </ul>
            <button className="btn btn-secondary">Get Started</button>
          </div>

          <div className="pricing-card professional">
            <div className="pricing-badge">Best Value</div>
            <div className="pricing-name">Premium Pack</div>
            <div className="pricing-price">
              <span>$49</span>
            </div>
            <p className="pricing-description">For deeper market research</p>
            <ul className="pricing-features">
              <li>Largest AI token allocation</li>
              <li>Ad-free experience</li>
              <li>Faster access to AI analysis</li>
              <li>Enhanced analytics & insights</li>
              <li>Priority customer support</li>
            </ul>
            <button className="btn btn-primary">Go Premium</button>
          </div>

          <div className="pricing-card enterprise">
            <div className="pricing-name">Standard Pack</div>
            <div className="pricing-price">
              <span>$29</span>
            </div>
            <p className="pricing-description">More analysis. Fewer interruptions.</p>
            <ul className="pricing-features">
              <li>Large AI token allocation</li>
              <li>Ad-free experience</li>
              <li>Extended token validity</li>
              <li>Premium customer support</li>
            </ul>
            <button className="btn btn-secondary">Get Standard</button>
          </div>
        </div>
        <p className="pricing-note-primary">AI tokens are used when you access AI-powered analysis and insights within Winst AI</p>
        <p className="pricing-note">Token allocations and pricing may vary by region, platform, and promotional offers. Need tokens only? Top-ups are available right inside the app.</p>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section">
        <h2>Why Choose Winst AI</h2>
        <div className="comparison-table">
          <div className="table-header">
            <div className="table-cell">Capability</div>
            <div className="table-cell">WINSTAI</div>
          </div>

          <div className="table-row">
            <div className="table-cell">AI-Powered Analysis</div>
            <div className="table-cell"><Check size={20} className="check" /></div>
          </div>

          <div className="table-row">
            <div className="table-cell">Real-Time Market Data</div>
            <div className="table-cell"><Check size={20} className="check" /></div>
          </div>

          <div className="table-row">
            <div className="table-cell">Financial Analysis</div>
            <div className="table-cell"><Check size={20} className="check" /></div>
          </div>

          <div className="table-row">
            <div className="table-cell">Technical Analysis</div>
            <div className="table-cell"><Check size={20} className="check" /></div>
          </div>

          <div className="table-row">
            <div className="table-cell">Portfolio Insights</div>
            <div className="table-cell"><Check size={20} className="check" /></div>
          </div>

          <div className="table-row">
            <div className="table-cell">Advanced Charts & Indicators</div>
            <div className="table-cell"><Check size={20} className="check" /></div>
          </div>

          <div className="table-row">
            <div className="table-cell">Mobile-First Experience</div>
            <div className="table-cell"><Check size={20} className="check" /></div>
          </div>
        </div>
        <p className="comparison-note">Explore market information from multiple perspectives — powered by AI and presented in one intuitive platform.</p>
      </section>

      {/* Premium CTA */}
      <section className="premium-cta">
        <div className="cta-content">
          <h2>Understand More. Analyze Better.</h2>
          <p>Explore stocks and markets with AI-powered analysis, real-time data and comprehensive financial insights.</p>

          <div className="cta-button-group">
            <button className="btn btn-primary btn-xl" onClick={handleDownloadiOS}>
              Download for iOS
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
              <span>20,000 AI tokens to start</span>
            </div>
            <div className="benefit">
              <span>✓</span>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
