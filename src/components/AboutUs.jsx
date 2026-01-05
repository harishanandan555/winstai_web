import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/LandingPage.css';
import { Brain, TrendingUp, Shield, Users, Lightbulb, Target } from 'lucide-react';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="about-page" style={{ backgroundColor: '#0a0a14', color: 'var(--text-primary)', minHeight: '100vh' }}>
            <Header />

            <main style={{ paddingTop: '2rem' }}>
                {/* Hero Section */}
                <section className="about-hero" style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="hero-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                        <Brain size={16} />
                        <span>Next-Gen Investing</span>
                    </div>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        lineHeight: '1.2'
                    }}>
                        About <span className="gradient-text">WinstAI</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        WinstAI is a next-generation AI-powered stock market analysis platform designed for U.S. investors seeking smarter, faster, and more confident investing decisions.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="mission-section" style={{
                    background: 'linear-gradient(180deg, rgba(30, 30, 46, 0.3) 0%, rgba(30, 30, 46, 0) 100%)',
                    padding: '4rem 2rem'
                }}>
                    <div className="max-w-6xl mx-auto" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div className="grid-2-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                                    Unified Intelligent Platform
                                </h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                                    WinstAI delivers real-time U.S. stock market data, including live stock prices, index data, technical indicators, and fundamental analysis, all unified into a single intelligent platform.
                                </p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                                    With one-click AI stock analysis, WinstAI helps investors instantly understand market trends, risks, and opportunities—without requiring deep expertise in technical or fundamental analysis.
                                </p>
                            </div>
                            <div style={{
                                background: 'linear-gradient(135deg, rgba(30, 30, 46, 0.8), rgba(20, 20, 32, 0.9))',
                                border: '1px solid var(--border)',
                                borderRadius: '20px',
                                padding: '2rem',
                                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)'
                            }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ background: 'rgba(0, 212, 255, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                            <TrendingUp color="var(--accent)" size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '600' }}>Real-time Analysis</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Live market data processing</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ background: 'rgba(0, 255, 136, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                            <Brain color="var(--accent-2)" size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '600' }}>AI Insights</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Explainable predictions</p>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <div style={{ background: 'rgba(255, 165, 0, 0.1)', padding: '10px', borderRadius: '10px' }}>
                                            <Lightbulb color="var(--accent-4)" size={24} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '600' }}>Smart Decisions</h4>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Data-driven confidence</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Do */}
                <section className="what-we-do" style={{ padding: '6rem 2rem' }}>
                    <div className="max-w-6xl mx-auto" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>What WinstAI Does</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Combining advanced artificial intelligence with live financial data</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { icon: TrendingUp, title: "Real-time Tracking", desc: "Real-time U.S. stock prices and index tracking" },
                                { icon: Brain, title: "AI Technical Analysis", desc: "Trends, momentum, support & resistance analysis" },
                                { icon: Target, title: "Fundamental Analysis", desc: "Financials, valuation signals, and company health" },
                                { icon: Lightbulb, title: "Instant Insights", desc: "One-click AI stock insights with clear explanations" },
                                { icon: Shield, title: "Risk Context", desc: "Market context to support entry and exit decision-making" },
                                { icon: Users, title: "Simplified Experience", desc: "For both beginners and experienced investors" }
                            ].map((item, idx) => (
                                <div key={idx} className="feature-card" style={{
                                    background: 'rgba(30, 30, 46, 0.4)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '12px',
                                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 255, 136, 0.1))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '1.5rem',
                                        border: '1px solid rgba(0, 212, 255, 0.2)'
                                    }}>
                                        <item.icon size={24} color="var(--accent)" />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.75rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section style={{ padding: '6rem 2rem', background: 'rgba(30, 30, 46, 0.3)' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>Built for Smarter Investing Decisions</h2>
                        <div style={{
                            background: 'rgba(10, 10, 20, 0.5)',
                            padding: '3rem',
                            borderRadius: '24px',
                            border: '1px solid var(--border)'
                        }}>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                                WinstAI is not a stock-tip or signal-only app. It is built as an AI investment analysis assistant that helps investors understand what is driving a stock’s price, what risks the market is pricing in, how technical and fundamental factors align, and what scenarios could impact future performance.
                            </p>
                            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--accent-2)' }}>
                                Our focus is on decision support, not prediction—helping investors reduce noise, avoid emotional decisions, and invest with greater clarity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Who uses WinstAI */}
                <section style={{ padding: '6rem 2rem' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>Who Uses WinstAI?</h2>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    {[
                                        "U.S. retail investors seeking reliable stock analysis tools",
                                        "Beginner investors who want guidance without complexity",
                                        "Experienced investors and traders looking for confirmation",
                                        "Anyone who prefers data-driven analysis over market hype"
                                    ].map((item, idx) => (
                                        <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                            <div style={{ minWidth: '24px', height: '24px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <span style={{ color: '#000', fontSize: '14px', fontWeight: 'bold' }}>✓</span>
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{
                                padding: '3rem',
                                background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                                borderRadius: '24px',
                                color: '#000',
                                textAlign: 'center'
                            }}>
                                <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Our Vision</h3>
                                <p style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: '500' }}>
                                    We believe the future of investing lies in explainable AI, transparency, and investor empowerment. WinstAI is built to help investors understand before they invest, using AI that is clear, unbiased, and practical.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
