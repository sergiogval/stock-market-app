import React from 'react';
import uniqid from 'uniqid';

const Stocks = ({ list, viewDetails }) => {
  const calcPercentage = (change, originalPrice) => Math.floor((change * 100) / (Number(originalPrice) + (-1 * change)));

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

export default Stocks;
