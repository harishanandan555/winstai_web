import React from 'react';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import '../styles/AnalysisSection.css';

function AnalysisSection() {
  const sectors = [
    { name: 'Technology', percentage: 95, change: '+4.2%' },
    { name: 'Healthcare', percentage: 72, change: '+2.8%' },
    { name: 'Financials', percentage: 65, change: '+2.1%' },
    { name: 'Energy', percentage: 48, change: '+1.5%' }
  ];

  const news = [
    { time: '2 mins ago', title: 'Fed signals possible interest rate cut in Q4' },
    { time: '45 mins ago', title: 'Tech stocks surge on AI advancements' },
    { time: '2 hours ago', title: 'Earnings season starts with strong results' }
  ];

  return (
    <div className="analysis-section">
      <h2>Market Analysis</h2>
      <div className="analysis-grid">
        {/* Bull Market Signals */}
        <div className="analysis-card">
          <h3>Bull Market Signals</h3>
          <div className="signal-item">
            <span className="signal-dot green"></span>
            <p>Strong uptrend momentum across indices</p>
          </div>
          <div className="signal-item">
            <span className="signal-dot green"></span>
            <p>Increasing trading volumes</p>
          </div>
          <div className="signal-item">
            <span className="signal-dot yellow"></span>
            <p>Mixed sector performance</p>
          </div>
        </div>

        {/* Top Sectors */}
        <div className="analysis-card">
          <h3>Top Sectors</h3>
          <div className="sector-bar">
            {sectors.map((sector, idx) => (
              <div key={idx} className="sector-item">
                <span>{sector.name}</span>
                <div className="bar">
                  <div 
                    className="fill" 
                    style={{ width: `${sector.percentage}%` }}
                  ></div>
                </div>
                <span className="percent">{sector.change}</span>
              </div>
            ))}
          </div>
        </div>

        {/* News & Updates */}
        <div className="analysis-card">
          <h3>News & Updates</h3>
          {news.map((item, idx) => (
            <div key={idx} className="news-item">
              <div className="news-time">
                <Clock size={14} />
                {item.time}
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnalysisSection;
