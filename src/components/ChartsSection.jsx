import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import '../styles/ChartsSection.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function ChartsSection({ selectedTimePeriod, setSelectedTimePeriod }) {
  const timeButtons = ['1D', '1W', '1M', '3M', '1Y'];

  const chartData = {
    '1D': {
      labels: ['9:30', '10:00', '11:00', '12:00', '1:00', '2:00', '3:00', '4:00'],
      sp500: [5200, 5210, 5225, 5235, 5240, 5230, 5235, 5234],
      nasdaq: [16850, 16870, 16890, 16905, 16900, 16885, 16900, 16892]
    },
    '1W': {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Mon', 'Tue'],
      sp500: [5100, 5150, 5180, 5200, 5220, 5215, 5234],
      nasdaq: [16700, 16750, 16800, 16850, 16880, 16890, 16892]
    },
    '1M': {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      sp500: [5050, 5120, 5180, 5234],
      nasdaq: [16600, 16750, 16850, 16892]
    },
    '3M': {
      labels: ['Aug', 'Sep', 'Oct', 'Nov'],
      sp500: [4950, 5050, 5150, 5234],
      nasdaq: [16400, 16600, 16800, 16892]
    },
    '1Y': {
      labels: ['Nov 24', 'Feb 25', 'May 25', 'Aug 25', 'Nov 25'],
      sp500: [4800, 4950, 5050, 5150, 5234],
      nasdaq: [16000, 16200, 16500, 16800, 16892]
    }
  };

  const currentData = chartData[selectedTimePeriod];

  const performanceChartData = {
    labels: currentData.labels,
    datasets: [
      {
        label: 'S&P 500',
        data: currentData.sp500,
        borderColor: '#00d4ff',
        backgroundColor: 'rgba(0, 212, 255, 0.1)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#00d4ff',
        pointBorderColor: '#1e1e2e',
        pointBorderWidth: 2,
        pointHoverRadius: 7
      },
      {
        label: 'NASDAQ',
        data: currentData.nasdaq,
        borderColor: '#00ff88',
        backgroundColor: 'rgba(0, 255, 136, 0.05)',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 4,
        pointBackgroundColor: '#00ff88',
        pointBorderColor: '#1e1e2e',
        pointBorderWidth: 2,
        borderDash: [5, 5]
      }
    ]
  };

  const portfolioChartData = {
    labels: ['Technology', 'Healthcare', 'Financials', 'Energy', 'Consumer'],
    datasets: [{
      data: [35, 25, 20, 12, 8],
      backgroundColor: [
        '#00d4ff',
        '#00ff88',
        '#ffa500',
        '#ff6b6b',
        '#8a2be2'
      ],
      borderColor: '#2d2d44',
      borderWidth: 2,
      hoverOffset: 10
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: '#e0e0e0',
          font: { size: 12, weight: '600' },
          padding: 20,
          usePointStyle: true
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: { color: 'rgba(64, 64, 86, 0.2)' },
        ticks: { color: '#a0a0a0' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#a0a0a0' }
      }
    }
  };

  return (
    <div className="charts-section">
      {/* Performance Chart */}
      <div className="chart-card">
        <div className="chart-header">
          <h2>Market Performance</h2>
          <div className="chart-controls">
            {timeButtons.map(btn => (
              <button
                key={btn}
                className={`time-btn ${selectedTimePeriod === btn ? 'active' : ''}`}
                onClick={() => setSelectedTimePeriod(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
        <Line data={performanceChartData} options={chartOptions} />
      </div>

      {/* Portfolio Distribution Chart */}
      <div className="chart-card">
        <div className="chart-header">
          <h2>Portfolio Distribution</h2>
        </div>
        <Doughnut 
          data={portfolioChartData} 
          options={{
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              legend: {
                labels: {
                  color: '#e0e0e0',
                  font: { size: 12, weight: '600' },
                  padding: 15,
                  usePointStyle: true
                },
                position: 'right'
              }
            }
          }}
        />
      </div>
    </div>
  );
}

export default ChartsSection;
