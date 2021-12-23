import React, { useState, useEffect } from 'react';

const Header = () => {
  const [hour, setHour] = useState('');
  const [minutes, setMinutes] = useState('');

  const getTheTime = () => {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();

    setHour(hour);
    setMinutes(minutes);
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
        <p>
          {hour}
          {' '}
          :
          {' '}
          {minutes}
        </p>
        <p>stock app</p>
      </div>
      <h1>Stock Market</h1>
      <div className="main-sub-header">
        <p>USA market</p>
        <small>over 1000 stocks</small>
      </div>
    </div>
  );
};

export default Header;
