import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { blogPosts } from '../data/blogData';
import '../styles/Blog.css';

const BlogList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="blog-page">
            <Header />

            <div className="blog-container">
                <div className="mb-8">
                    <Link to="/" className="back-link">
                        <ArrowLeft size={20} />
                        Back to Home
                    </Link>
                </div>

                <div className="blog-header">
                    <h1>WinstAI Blog</h1>
                    <p>Insights on AI-powered investing, market analysis, and smarter decision-making</p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            to={`/blog/${post.id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="blog-card">
                                <div className="blog-card-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h2>{post.title}</h2>

                                <p className="blog-card-excerpt">{post.excerpt}</p>

                                <div className="blog-card-footer">
                                    <div className="blog-author">
                                        <User size={16} />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="read-more">
                                        Read More
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default BlogList;
