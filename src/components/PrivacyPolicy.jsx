import React, { useEffect } from 'react';
import '../styles/LandingPage.css';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="privacy-page" style={{
            backgroundColor: '#0a0a14',
            minHeight: '100vh',
            color: 'var(--text-primary)',
            padding: '4rem 2rem'
        }}>
            <div className="max-w-4xl mx-auto" style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent-2 transition-colors" style={{
                        color: 'var(--accent)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '2rem',
                        textDecoration: 'none'
                    }}>
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>

                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: '800',
                    marginBottom: '1rem',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>Privacy Policy</h1>

                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem' }}>Last Updated: [Insert Date]</p>

                <div className="privacy-content" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>

                    <p className="mb-6" style={{ marginBottom: '1.5rem' }}>
                        This Privacy Policy explains how Winst AI ("Winst AI," "we," "us," "our") collects, uses, discloses, and protects your information when you use our website, mobile application, and services ("Services").
                    </p>
                    <p className="mb-6" style={{ marginBottom: '1.5rem' }}>
                        Winst AI is owned and operated by Conglorean Datalabs and Media Private Limited, an Indian company registered under the Companies Act, 2013.
                    </p>
                    <p className="mb-6" style={{ marginBottom: '1.5rem' }}>
                        By accessing or using Winst AI, you agree to the practices described in this Privacy Policy.
                        If you do not agree, please discontinue use of the Services.
                    </p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>1. Information We Collect</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>We collect information in the following categories:</p>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>1.1 Information You Provide to Us</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Account information (name, email address, password)</li>
                        <li>Profile information (username, preferences)</li>
                        <li>Payment information (processed through third-party payment processors)</li>
                        <li>Communications (support requests, feedback, chat messages)</li>
                        <li>User Input submitted to the AI system (prompts, stock selections, analysis requests)</li>
                    </ul>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>1.2 Information We Automatically Collect</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>When you use Winst AI, we automatically collect:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Device information (IP address, device ID, OS, browser type)</li>
                        <li>Usage data (clicks, features used, tokens consumed, ads viewed)</li>
                        <li>Location data (approximate location derived from IP)</li>
                        <li>Log data (timestamps, session duration, crash logs)</li>
                        <li>Cookies and tracking data
                            <ul style={{ listStyleType: 'circle', paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                                <li>session cookies</li>
                                <li>analytics cookies</li>
                                <li>advertising identifiers</li>
                            </ul>
                        </li>
                    </ul>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>1.3 Information from Third Parties</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Winst AI uses multiple third-party APIs and data sources, including but not limited to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>OpenAI APIs</li>
                        <li>Stock market data providers</li>
                        <li>News and sentiment engines</li>
                        <li>SEC filings databases</li>
                        <li>Insider trading data sources</li>
                        <li>Analytics providers</li>
                        <li>Ad networks</li>
                    </ul>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>These partners may provide us with:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Market data</li>
                        <li>AI-generated content</li>
                        <li>Analytics insights</li>
                        <li>Advertising identifiers</li>
                        <li>Referrer information</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>We do not control their privacy practices and encourage you to review their policies.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>2. How We Use Personal Information</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '1rem' }}>We use your information for the following purposes:</p>

                        <strong style={{ color: 'var(--text-primary)' }}>To provide and operate our Services</strong>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Create and manage accounts</li>
                            <li>Process requests, token usage, and AI queries</li>
                            <li>Deliver analytics, insights, and historical financial data</li>
                        </ul>

                        <strong style={{ color: 'var(--text-primary)' }}>For personalization</strong>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Customize user experience</li>
                            <li>Display relevant ads to Free Users</li>
                            <li>Provide tailored insights and suggestions</li>
                        </ul>

                        <strong style={{ color: 'var(--text-primary)' }}>For payments & subscriptions</strong>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Process transactions</li>
                            <li>Manage token purchases and renewals</li>
                        </ul>

                        <strong style={{ color: 'var(--text-primary)' }}>For analytics and improvements</strong>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Improve AI models</li>
                            <li>Enhance performance and fix bugs</li>
                            <li>Develop new features</li>
                        </ul>

                        <strong style={{ color: 'var(--text-primary)' }}>For communication</strong>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Send notifications, updates, security alerts</li>
                            <li>Respond to support requests</li>
                        </ul>

                        <strong style={{ color: 'var(--text-primary)' }}>For legal & security purposes</strong>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Prevent fraud, abuse, or violations</li>
                            <li>Comply with legal obligations</li>
                            <li>Enforce Terms of Service</li>
                        </ul>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>3. AI Data Usage</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.1 User Input</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Your Input (questions, prompts, stock analyses) may be processed to generate AI Output.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.2 AI Output</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>AI Output may be similar for other users due to nature of large language models.</li>
                        </ul>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.3 We DO NOT:</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Use your data to train third-party AI models</li>
                            <li>Sell your Input or Output</li>
                            <li>Allow third parties to track your prompts</li>
                        </ul>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.4 We MAY:</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Use data internally to improve system stability, accuracy, or safety</li>
                            <li>Use anonymized or aggregated data for analytics</li>
                        </ul>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>4. Sharing of Information</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '1rem' }}>We may share information with:</p>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>4.1 Service Providers</h3>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Cloud hosting providers</li>
                            <li>AI API providers (e.g., OpenAI)</li>
                            <li>Stock market data companies</li>
                            <li>Payment processors</li>
                            <li>Analytics platforms</li>
                            <li>Advertising networks</li>
                            <li>Customer support tools</li>
                        </ul>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>4.2 Legal Compliance</h3>
                        <p style={{ marginBottom: '0.5rem' }}>We may disclose your information if required to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Comply with legal processes</li>
                            <li>Prevent fraud or threats</li>
                            <li>Enforce our Terms of Service</li>
                        </ul>

                        <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>4.3 Business Transfers</h3>
                        <p>If Winst AI undergoes merger, acquisition, or asset sale, your data may be transferred to the successor entity. We will notify you if legally required.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>5. Advertising & Token Rewards</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>Free Users may see ads from:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Google Ads</li>
                            <li>Third-party demand partners</li>
                            <li>Other ad networks</li>
                        </ul>
                        <p style={{ marginBottom: '0.5rem' }}>When you view an ad:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>We may receive a confirmation</li>
                            <li>You may receive 1,500–2,000 tokens</li>
                        </ul>
                        <p>We do not give advertisers access to your prompts.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>6. Data Retention</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>We retain your data only as long as necessary to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Provide the Services</li>
                            <li>Fulfill legal obligations</li>
                            <li>Resolve disputes</li>
                            <li>Enforce agreements</li>
                        </ul>
                        <p>You may request account deletion at any time.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>7. Your Rights</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>Depending on your region (US, EU, UK, India), you may have the right to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Access your data</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion</li>
                            <li>Opt out of marketing communications</li>
                            <li>Opt out of data sales (CCPA)</li>
                            <li>Request data portability</li>
                        </ul>
                        <p style={{ marginTop: '1rem' }}>To exercise your rights: Contact@winstai.com</p>
                        <p>We may verify your identity before processing your request.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>8. Children's Privacy</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Winst AI does not knowingly collect data from children under 13.</li>
                        <li>Users between 13–18 require parent/guardian consent.</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>If we learn a child under 13 used the Services, we will delete the data.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>9. Security Measures</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>We implement reasonable administrative, technical, and physical safeguards including:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Encryption in transit</li>
                            <li>Secure data storage</li>
                            <li>Access controls and authentication</li>
                            <li>Regular security audits</li>
                            <li>Token and API abuse monitoring</li>
                        </ul>
                        <p>However, no method of transmission or storage is fully secure.</p>
                        <p>You use Winst AI at your own risk.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>10. Financial Data & Investment Disclaimer</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>Because Winst AI provides financial analytics:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>We do not provide professional financial advice</li>
                            <li>We do not guarantee accuracy of stock, financial, or sentiment data</li>
                            <li>AI Output may contain errors or outdated information</li>
                            <li>You should consult a licensed advisor before making decisions</li>
                        </ul>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>11. International Data Transfers</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>Because Winst AI operates globally:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Data may be processed in India, the United States, Europe, or other regions</li>
                            <li>Data protection laws may differ from your jurisdiction</li>
                        </ul>
                        <p>We ensure reasonable safeguards when transferring data.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>12. California Privacy Rights (CCPA)</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>California residents have rights to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Know what information is collected</li>
                            <li>Request deletion</li>
                            <li>Opt out of "sale" or "sharing" of personal information</li>
                            <li>Request information about third-party disclosures</li>
                        </ul>
                        <p>Winst AI does not sell personal information.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>13. GDPR Rights (EU Users)</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>If you are in the EU/EEA, you have rights to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Access</li>
                            <li>Rectify</li>
                            <li>Erase</li>
                            <li>Restrict processing</li>
                            <li>Withdraw consent</li>
                            <li>Data portability</li>
                            <li>Object to automated decisions</li>
                        </ul>
                        <p style={{ marginBottom: '0.5rem' }}>Our legal basis for processing includes:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Contractual necessity</li>
                            <li>Legitimate interests</li>
                            <li>Legal compliance</li>
                            <li>Consent (where applicable)</li>
                        </ul>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>14. Data Processing for Ads</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>Ad partners may collect:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Device identifiers</li>
                            <li>Approximate location</li>
                            <li>Usage patterns</li>
                            <li>Anonymous analytics</li>
                        </ul>
                        <p style={{ marginBottom: '0.5rem' }}>We require partners to comply with:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>GDPR</li>
                            <li>CCPA</li>
                            <li>COPPA</li>
                            <li>Industry standards</li>
                        </ul>
                        <p>Free Users consent to ads by using the free plan.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>15. Changes to This Policy</h2>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '0.5rem' }}>We may update this Privacy Policy from time to time. We will notify you by:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li>Posting on our website</li>
                            <li>Updating the "Last Updated" date</li>
                            <li>Sending an email (when required)</li>
                        </ul>
                        <p>Continued use of the Services means you accept the updated policy.</p>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>16. Contact Information</h2>
                    <div style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '1rem' }}>If you have questions or requests regarding privacy, contact: Winst AI (Conglorean Datalabs and Media Private Limited)</p>
                        <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> contact@winstai.com</p>
                        <p><strong>Registered Office:</strong> Conglorean Datalabs and Media Pvt Ltd, 3rd Floor, No 210/2, Upper Palace Orchards, Bellary Road, Sadashivanagar, Bengaluru (560080), Karnataka, India.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
