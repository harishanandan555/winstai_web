import React, { useState } from 'react';
import MetricsGrid from './MetricsGrid';
import ChartsSection from './ChartsSection';
import StocksTable from './StocksTable';
import AnalysisSection from './AnalysisSection';
import '../styles/Dashboard.css';

function Dashboard({ marketData, onShowNotification }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('1D');

  const stocks = [
    { symbol: 'AAPL', company: 'Apple Inc.', price: 234.50, change: 5.32, changePercent: 2.32, volume: '45.2M', marketCap: '$3.2T', positive: true },
    { symbol: 'MSFT', company: 'Microsoft Corporation', price: 420.89, change: 8.45, changePercent: 2.05, volume: '28.5M', marketCap: '$3.1T', positive: true },
    { symbol: 'GOOGL', company: 'Alphabet Inc.', price: 142.67, change: 2.87, changePercent: 2.05, volume: '32.1M', marketCap: '$1.9T', positive: true },
    { symbol: 'AMZN', company: 'Amazon.com Inc.', price: 189.32, change: -1.23, changePercent: -0.64, volume: '38.7M', marketCap: '$1.8T', positive: false },
    { symbol: 'NVDA', company: 'NVIDIA Corporation', price: 892.45, change: 28.34, changePercent: 3.28, volume: '52.3M', marketCap: '$2.2T', positive: true },
    { symbol: 'TSLA', company: 'Tesla Inc.', price: 243.78, change: 12.45, changePercent: 5.38, volume: '124.5M', marketCap: '$780B', positive: true },
    { symbol: 'META', company: 'Meta Platforms Inc.', price: 456.23, change: -3.12, changePercent: -0.68, volume: '18.9M', marketCap: '$1.1T', positive: false },
    { symbol: 'JPM', company: 'JPMorgan Chase', price: 187.65, change: 4.23, changePercent: 2.31, volume: '8.5M', marketCap: '$510B', positive: true }
  ];

  const filteredStocks = stocks.filter(stock =>
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    stock.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyClick = (symbol) => {
    onShowNotification(`Added ${symbol} to watchlist!`);
  };

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header-section">
        <h1>Market Overview</h1>
        <p>Real-time market data and analysis</p>
      </div>

      {/* Metrics Grid */}
      <MetricsGrid />

      {/* Charts Section */}
      <ChartsSection 
        selectedTimePeriod={selectedTimePeriod}
        setSelectedTimePeriod={setSelectedTimePeriod}
      />

      {/* Stocks Table */}
      <StocksTable 
        stocks={filteredStocks}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onBuyClick={handleBuyClick}
      />

      {/* Analysis Section */}
      <AnalysisSection />
    </div>
  );
}

export default Dashboard;
