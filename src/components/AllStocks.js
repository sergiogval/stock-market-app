/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import uniqid from 'uniqid';
import GobakcBtn from './GobackBtn';

const AllStocks = () => {
  const [localState, setLocalState] = useState([{ symbol: 'AAPL' }]);

  return (
    <div className="all-stocks-container">
      <header>
        <GobakcBtn path="/" />
        <hgroup>
          <h1>All stocks</h1>
          <small>Number of Stoks</small>
        </hgroup>
        <input type="text" placeholder="Search by stock symbol..." />
      </header>
      <div className="main">
        <ul>
          {localState.map((stock) => <li key={uniqid()} id={stock.symbol}>{stock.symbol}</li>)}
        </ul>
      </div>

    </div>

  );
};

export default AllStocks;
