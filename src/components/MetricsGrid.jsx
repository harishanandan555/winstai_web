import React from 'react';
import { TrendingUp, PieChart, Coins, Activity } from 'lucide-react';
import '../styles/MetricsGrid.css';

function MetricsGrid() {
  const metrics = [
    {
      id: 1,
      title: 'Market Trend',
      value: '+3.24%',
      label: 'Last 24 hours',
      icon: TrendingUp,
      color: 'green'
    },
    {
      id: 2,
      title: 'Portfolio Value',
      value: '$524,320',
      label: 'Total Assets',
      icon: PieChart,
      color: 'blue'
    },
    {
      id: 3,
      title: "Today's Profit",
      value: '+$8,945',
      label: '+3.45%',
      icon: Coins,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Volatility Index',
      value: '18.42',
      label: 'Moderate Risk',
      icon: Activity,
      color: 'orange'
    }
  ];

  return (
    <div className="metrics-grid">
      {metrics.map(metric => {
        const IconComponent = metric.icon;
        return (
          <div key={metric.id} className="metric-card">
            <div className={`metric-icon ${metric.color}`}>
              <IconComponent size={32} />
            </div>
            <div className="metric-content">
              <h3>{metric.title}</h3>
              <p className="metric-value">{metric.value}</p>
              <span className="metric-label">{metric.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MetricsGrid;
