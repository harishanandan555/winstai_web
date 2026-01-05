import React, { useEffect } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { blogPosts } from '../data/blogData';
import '../styles/Blog.css';

const BlogPost = () => {
    const { id } = useParams();
    const post = blogPosts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="blog-post-page">
            <Header />

            <div className="blog-post-container">
                <Link to="/blog" className="back-link">
                    <ArrowLeft size={20} />
                    Back to Blog
                </Link>

                <article>
                    <header className="blog-post-header">
                        <h1 className="blog-post-title">{post.title}</h1>

                        <div className="blog-post-meta">
                            <div className="blog-post-meta-item">
                                <User size={18} />
                                <span>{post.author}</span>
                            </div>
                            <div className="blog-post-meta-item">
                                <Calendar size={18} />
                                <span>{new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </div>
                            <div className="blog-post-meta-item">
                                <Clock size={18} />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </header>

                    <div className="blog-post-content">
                        <div className="blog-introduction">
                            {post.content.introduction.split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>

                        {post.content.sections.map((section, idx) => (
                            <section key={idx}>
                                <h2>{section.heading}</h2>
                                {section.content.split('\n\n').map((paragraph, pIdx) => {
                                    // Check if paragraph contains bullet points
                                    if (paragraph.includes('•')) {
                                        const lines = paragraph.split('\n');
                                        const textLines = [];
                                        const bulletPoints = [];

                                        lines.forEach(line => {
                                            if (line.trim().startsWith('•')) {
                                                bulletPoints.push(line.replace('•', '').trim());
                                            } else if (line.trim()) {
                                                textLines.push(line);
                                            }
                                        });

                                        return (
                                            <div key={pIdx}>
                                                {textLines.length > 0 && <p>{textLines.join(' ')}</p>}
                                                {bulletPoints.length > 0 && (
                                                    <ul>
                                                        {bulletPoints.map((point, bIdx) => (
                                                            <li key={bIdx}>{point}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        );
                                    }

                                    // Check if paragraph starts with ** for bold headings
                                    if (paragraph.startsWith('**')) {
                                        const parts = paragraph.split('**');
                                        return (
                                            <div key={pIdx}>
                                                <h3>{parts[1]}</h3>
                                                {parts[2] && <p>{parts[2].trim()}</p>}
                                            </div>
                                        );
                                    }

                                    return <p key={pIdx}>{paragraph}</p>;
                                })}
                            </section>
                        ))}

                        <div className="blog-conclusion">
                            <strong>Final Takeaway</strong>
                            <p style={{ marginTop: '1rem' }}>{post.content.conclusion}</p>
                        </div>
                    </div>
                </article>
            </div>

            <Footer />
        </div>
    );
};

export default BlogPost;
