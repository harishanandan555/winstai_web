import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import CancellationRefundPolicy from './components/CancellationRefundPolicy';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

import AboutUs from './components/AboutUs';
import Careers from './components/Careers';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/cancellation" element={<CancellationRefundPolicy />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
