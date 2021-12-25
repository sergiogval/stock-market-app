import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Header = ({
  handleSearch, handelEvent, active, nonActive, handelCloseEvent,
}) => {
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');

  const getTheTime = () => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    setHour(hour < 10 ? `0${hour}` : hour);
    setMinutes(minutes < 10 ? `0${minutes}` : minutes);
  };

  const updateTime = () => {
    getTheTime();
    setInterval(getTheTime, 60000);
  };

  useEffect(() => {
    if (!hour && !minutes) {
      updateTime();
    }
  }, []);

  return (
    <div className="main-header">
      <div className="main-inner-header">
        <div className={`inner-header-default ${nonActive}`}>
          <p>
            {hour}
            {' '}
            :
            {' '}
            {minutes}
          </p>
          <p>stock app</p>
          <button type="button" className="searchBtn" onClick={handelEvent}> </button>
        </div>
        <div className={`main-search-bar ${active}`}>
          <input
            type="search"
            name="main-search-bar"
            onChange={handleSearch}
            onKeyUp={handleSearch}
            className={`main-search-bar-int ${active}`}
            placeholder="Search by stock name or company name.."
          />
          <button type="button" className="hideSearchBtn" onClick={handelCloseEvent}>x</button>
        </div>
      </div>
      <h1>Stock Market</h1>
      <div className="main-sub-header">
        <p>USA market</p>
        <small>over 1000 stocks</small>
      </div>
    </div>
  );
};

Header.propTypes = {
  active: PropTypes.element.isRequired,
  nonActive: PropTypes.element.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handelEvent: PropTypes.func.isRequired,
  handelCloseEvent: PropTypes.func.isRequired,
};

export default Header;
