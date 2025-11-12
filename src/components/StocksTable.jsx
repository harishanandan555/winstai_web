import React from 'react';
import { Search } from 'lucide-react';
import '../styles/StocksTable.css';

function StocksTable({ stocks, searchTerm, setSearchTerm, onBuyClick }) {
  return (
    <div className="table-section">
      <div className="table-header">
        <h2>Top Performers</h2>
        <div className="search-wrapper">
          <Search size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-wrapper">
        <table className="stocks-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Company</th>
              <th>Price</th>
              <th>Change</th>
              <th>% Change</th>
              <th>Volume</th>
              <th>Market Cap</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock) => (
              <tr key={stock.symbol} className="stock-row">
                <td><span className="symbol">{stock.symbol}</span></td>
                <td>{stock.company}</td>
                <td>${stock.price.toFixed(2)}</td>
                <td className={stock.positive ? 'positive' : 'negative'}>
                  {stock.positive ? '+' : ''} ${stock.change.toFixed(2)}
                </td>
                <td className={stock.positive ? 'positive' : 'negative'}>
                  {stock.positive ? '+' : ''} {stock.changePercent}%
                </td>
                <td>{stock.volume}</td>
                <td>{stock.marketCap}</td>
                <td>
                  <button
                    className="btn-buy"
                    onClick={() => onBuyClick(stock.symbol)}
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {stocks.length === 0 && (
          <div className="no-results">
            <p>No stocks found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default StocksTable;
