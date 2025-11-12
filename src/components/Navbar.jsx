import React, { useState } from 'react';
import { Search, Bell, User, TrendingUp } from 'lucide-react';
import '../styles/Navbar.css';

function Navbar({ activeNav, setActiveNav }) {
  const [searchActive, setSearchActive] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'markets', label: 'Markets' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'analysis', label: 'Analysis' },
    { id: 'watchlist', label: 'Watchlist' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <TrendingUp size={28} />
          <span>WINSTAI</span>
        </div>

        {/* Navigation Menu */}
        <ul className="nav-menu">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                onClick={() => setActiveNav(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* User Menu */}
        <div className="user-menu">
          <button 
            className="search-btn"
            onClick={() => setSearchActive(!searchActive)}
            title="Search"
          >
            <Search size={20} />
          </button>
          <button className="notify-btn" title="Notifications">
            <Bell size={20} />
            <span className="notify-badge">3</span>
          </button>
          <button className="user-btn" title="Profile">
            <User size={20} />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchActive && (
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search stocks by symbol..." 
            autoFocus
          />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
