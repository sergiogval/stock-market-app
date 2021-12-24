import React from 'react';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

const Stocks = ({ list, viewDetails }) => {
  const calcPercentage = (ch, p) => Math.floor((ch * 100) / (Number(p) + (-1 * ch)));

  return (
    <ul className="stockList">
      {list.map((stock) => (
        <button className="single-stock" type="button" key={uniqid()} id={stock.ticker} onClick={viewDetails}>
          <div className="stock-name">
            <p>{stock.name}</p>
            <small>{stock.ticker}</small>
          </div>
          <div className="stock-indicators">
            <span className={stock.changes >= 0 ? 'success' : 'fail'}>{stock.changes}</span>
            <small className={stock.changes >= 0 ? 'percentageSuccess' : 'percentageFail'}>
              {calcPercentage(stock.changes, stock.currentPrice)}
              {' '}
              %
            </small>
          </div>
        </button>
      ))}
    </ul>
  );
};

Stocks.propTypes = {
  list: PropTypes.element.isRequired,
  viewDetails: PropTypes.func.isRequired,
};

export default Stocks;
