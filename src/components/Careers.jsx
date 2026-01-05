import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/LandingPage.css';
import { Briefcase, Mail, Send, Cpu, Globe, TrendingUp } from 'lucide-react';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleEmailClick = () => {
        window.location.href = "mailto:career@winstai.com";
    };

    return (
        <div className="careers-page" style={{ backgroundColor: '#0a0a14', color: 'var(--text-primary)', minHeight: '100vh' }}>
            <Header />

            <main style={{ paddingTop: '2rem' }}>
                {/* Hero Section */}
                <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
                    <div className="hero-badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                        <Briefcase size={16} />
                        <span>Join Our Team</span>
                    </div>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        lineHeight: '1.2'
                    }}>
                        Careers at <span className="gradient-text">WinstAI</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        At WinstAI, we’re building the future of AI-powered stock market analysis—designed to help investors make smarter, more confident decisions.
                    </p>
                </section>

                {/* Who We Look For */}
                <section style={{
                    padding: '4rem 2rem',
                    background: 'linear-gradient(180deg, rgba(30, 30, 46, 0.3) 0%, rgba(30, 30, 46, 0) 100%)'
                }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>We're always interested in...</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Connecting with curious minds, problem solvers, and builders.</p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {[
                                { icon: Cpu, title: "AI & Engineering", desc: "Building the neural engines that power our analysis." },
                                { icon: Globe, title: "Product & Design", desc: "Shaping intuitive experiences for complex data." },
                                { icon: TrendingUp, title: "Market Research", desc: "Understanding the financial landscape deeply." }
                            ].map((item, idx) => (
                                <div key={idx} style={{
                                    background: 'rgba(30, 30, 46, 0.4)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '16px',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 255, 136, 0.1))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgba(0, 212, 255, 0.2)'
                                    }}>
                                        <item.icon size={28} color="var(--accent)" />
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact/CTA Section */}
                <section style={{ padding: '6rem 2rem' }}>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'linear-gradient(135deg, rgba(30, 30, 46, 0.8), rgba(20, 20, 32, 0.9))',
                        borderRadius: '24px',
                        border: '1px solid var(--border)',
                        padding: '4rem 2rem',
                        textAlign: 'center',
                        boxShadow: '0 20px 50px rgba(0, 212, 255, 0.1)'
                    }}>
                        <Mail size={48} color="var(--accent-2)" style={{ marginBottom: '1.5rem' }} />
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Want to shape intelligent investing?</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                            If you’re looking to be part of a fast-growing fintech platform, we’d love to hear from you.
                            Currently, we don't have open positions listed here, but we're always looking for talent.
                        </p>

                        <button
                            onClick={handleEmailClick}
                            className="btn btn-primary btn-xl"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}
                        >
                            <Send size={20} />
                            Send your CV to career@winstai.com
                        </button>

                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            We’ll reach out when there’s a role that matches your profile.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;
