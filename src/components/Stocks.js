/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const Stocks = ({ list, viewDetails }) => {
  const calcPercentage = (ch, p) => Math.floor((ch * 100) / (Number(p) + (-1 * ch)));

  return (
    <ul className="stockList">
      {list.map((stock) => (
        <li key={uniqid()} id={stock.ticker} onClick={viewDetails}>
          <div className="stock-name" id={stock.ticker}>
            <p id={stock.ticker}>{stock.name}</p>
            <small id={stock.ticker}>{stock.ticker}</small>
          </div>
          <div className="stock-indicators" id={stock.ticker}>
            <span className={stock.changes >= 0 ? 'success' : 'fail'} id={stock.ticker}>{stock.changes}</span>
            <small id={stock.ticker} className={stock.changes >= 0 ? 'percentageSuccess' : 'percentageFail'}>
              {calcPercentage(stock.changes, stock.currentPrice)}
              {' '}
              %
            </small>
          </div>
        </li>
      ))}
    </ul>
  );
};

Stocks.propTypes = {
  list: PropTypes.element.isRequired,
  viewDetails: PropTypes.func.isRequired,
};

export default Stocks;
