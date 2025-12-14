import React, { useEffect } from 'react';
import '../styles/LandingPage.css';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CancellationRefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="policy-page" style={{
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
                }}>Cancellation & Refund Policy</h1>

                <div className="policy-content" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>1. General Policy</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Winst AI provides digital products and AI-based analytics services.</p>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Because all purchases involve instant access to digital content, refunds are generally not provided, except where required by law or explicitly mentioned below.</p>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>This policy applies to:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Subscription plans</li>
                        <li>Token purchases</li>
                        <li>Ads-free plans</li>
                        <li>In-app purchases</li>
                        <li>Promotional packages</li>
                    </ul>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>2. Free Users & Tokens</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Free Users receive 50,000 free tokens upon signing up.</li>
                        <li>Free Users may earn additional tokens by watching ads.</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Since no payment is involved, no refunds apply to free tokens or ad-earned tokens.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>3. Subscription Plans</h2>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.1 Auto-renewing Subscriptions</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Premium subscriptions automatically renew unless cancelled at least 24 hours before the renewal date.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.2 Cancellation</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>You may cancel any subscription at any time through:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Google Play Store</li>
                        <li>Apple App Store</li>
                        <li>Winst AI web portal (if applicable)</li>
                    </ul>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.3 Effect of Cancellation</h3>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Cancelling a subscription stops future charges.</li>
                        <li>You continue to have access to Premium features until the end of the current billing period.</li>
                        <li>No partial-period or prorated refunds are issued.</li>
                    </ul>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.4 Refunds</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>We do not offer refunds for:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>Partially used subscription periods</li>
                        <li>Changing your mind</li>
                        <li>Unused tokens</li>
                        <li>Forgetting to cancel before renewal</li>
                        <li>Perceived lack of results or accuracy of AI output</li>
                    </ul>

                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-primary)' }}>3.5 Exceptions</h3>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Refunds may be issued only at our sole discretion if:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>You were mistakenly charged twice</li>
                        <li>You encountered a verified technical issue preventing reasonable use</li>
                        <li>Required by law (e.g., limited EU cooling-off rules)</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>To request an exception, email: support@winstai.com</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>4. Token Purchases</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Tokens are digital consumable items and are non-refundable once delivered to your account.</p>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Refunds will not be issued for:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Accidentally purchased tokens</li>
                        <li>Unused tokens</li>
                        <li>Token expiry</li>
                        <li>Misunderstanding of token usage or consumption rate</li>
                        <li>Output generated using tokens</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>If tokens fail to appear after successful payment, contact support within 72 hours.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>5. In-App Purchases (Google Play & Apple App Store)</h2>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>All purchases made through:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Apple App Store (iOS)</li>
                        <li>Google Play Store (Android)</li>
                    </ul>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Are subject to their respective refund policies.</p>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>You must request refunds directly through:</p>
                    <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>📱 Apple: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>https://reportaproblem.apple.com</a></li>
                        <li>📱 Google Play: <a href="https://play.google.com/store/account" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>https://play.google.com/store/account</a></li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Winst AI cannot issue refunds for App Store or Play Store transactions.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>6. Billing Disputes</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>If you believe you were billed incorrectly:</p>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Contact us at contact@winstai.com within 30 days of the charge.</p>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>We do not accept dispute requests after 30 days.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>7. Fraudulent or Unauthorized Payments</h2>
                    <div style={{ padding: '1.5rem', backgroundColor: 'rgba(255, 107, 107, 0.05)', border: '1px solid rgba(255, 107, 107, 0.2)', borderRadius: '12px', marginBottom: '2rem' }}>
                        <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>If we detect:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                            <li>unauthorized purchases</li>
                            <li>fraudulent activity</li>
                            <li>misuse of payment methods</li>
                            <li>attempts to gain tokens through abuse</li>
                        </ul>
                        <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>We reserve the right to:</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '0', color: 'var(--text-secondary)' }}>
                            <li>suspend or terminate your account</li>
                            <li>deny refunds</li>
                            <li>forfeit tokens</li>
                            <li>cooperate with authorities or payment processors</li>
                        </ul>
                    </div>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>8. Service Interruptions</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Winst AI uses third-party APIs and market data providers.</p>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Refunds will not be issued for:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>temporary downtime</li>
                        <li>maintenance windows</li>
                        <li>AI processing delays</li>
                        <li>model inaccuracies</li>
                        <li>third-party data errors or outages</li>
                        <li>loss of access due to internet or device issues</li>
                    </ul>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>9. EU/UK Consumer Rights</h2>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>Where applicable, EU/UK consumers may be entitled to a statutory 14-day cooling-off period, but this does not apply once:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>You purchase digital content (tokens or subscription), and</li>
                        <li>You agree to immediate digital delivery, which you do when purchasing in the Winst AI app.</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Thus, most purchased digital content is non-refundable under EU/UK law.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>10. India Consumer Law (For Indian Users)</h2>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>If you are located in India:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Digital goods are generally not refundable</li>
                        <li>Refunds are provided only for incorrect or duplicate charges</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Our company follows fair practice guidelines under Indian law.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>11. USA Consumers</h2>
                    <p style={{ marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Under U.S. consumer law, digital services are typically non-refundable, except in cases of:</p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        <li>Fraud</li>
                        <li>Accidental duplicate billing</li>
                        <li>Regulatory exceptions</li>
                    </ul>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Winst AI adheres to Delaware and U.S. federal digital commerce standards.</p>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>12. Changes to This Policy</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                        <li>We may update this Policy from time to time.</li>
                        <li>Updates become effective immediately upon publication.</li>
                        <li>Continued use of the Services constitutes acceptance of the updated Policy.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginTop: '3rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>13. Contact Us</h2>
                    <div style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                        <p style={{ marginBottom: '1rem' }}>For refund/cancellation requests or billing issues, contact:</p>
                        <p style={{ marginBottom: '1rem' }}>Winst AI (Conglorean Datalabs and Media Private Limited)</p>
                        <p style={{ marginBottom: '0.5rem' }}>📧 <strong>Support:</strong> support@winstai.com</p>
                        <p>📍 <strong>India Registered Office:</strong> Conglorean Datalabs and Media Pvt Ltd, 3rd Floor, No 210/2, Upper Palace Orchards, Bellary Road, Sadashivanagar, Bengaluru (560080), Karnataka, India.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancellationRefundPolicy;
