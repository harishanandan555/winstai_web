import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import '../styles/Sidebar.css';

function Sidebar({ marketData, onShowNotification }) {
  const indices = [
    { name: 'S&P 500', value: 5234.80, change: 2.45, positive: true },
    { name: 'NASDAQ', value: 16892.50, change: 1.82, positive: true },
    { name: 'DOW JONES', value: 41584.30, change: -0.58, positive: false }
  ];

  const stats = [
    { label: 'Market Cap', value: '$96.2T' },
    { label: 'Volume', value: '2.4B' },
    { label: 'Gainers', value: '1,245', positive: true },
    { label: 'Losers', value: '856', positive: false }
  ];

  const handleIndexClick = (index) => {
    onShowNotification(
      `Viewing ${index.name}: $${index.value.toLocaleString()}`
    );
  };

  return (
    <aside className="sidebar">
      {/* Market Indices Section */}
      <div className="sidebar-section">
        <h3>MARKET INDICES</h3>
        {indices.map((index, idx) => (
          <div 
            key={idx} 
            className="index-card"
            onClick={() => handleIndexClick(index)}
          >
            <div className="index-name">{index.name}</div>
            <div className="index-value">${index.value.toLocaleString()}</div>
            <div className={`index-change ${index.positive ? 'positive' : 'negative'}`}>
              {index.positive ? (
                <TrendingUp size={14} />
              ) : (
                <TrendingDown size={14} />
              )}
              <span>{index.positive ? '+' : ''}{index.change}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats Section */}
      <div className="sidebar-section">
        <h3>QUICK STATS</h3>
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-item">
            <span>{stat.label}</span>
            <strong className={stat.positive !== undefined ? (stat.positive ? 'text-green' : 'text-red') : ''}>
              {stat.value}
            </strong>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
