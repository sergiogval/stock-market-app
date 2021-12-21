import React from "react";
import uniqid from 'uniqid';

const Stocks = ({list, viewDetails}) => {

  const calcPercentage = (change, originalPrice) => Math.floor((change * 100) / (Number(originalPrice) + (-1 * change)));
  
  return (
    <ul className="stockList">
      {list.map(stock => {
        return (
            <li key={uniqid()} id={stock.ticker} onClick={viewDetails}>
              <div className="stock-name">
                <p>{stock.name}</p>
                <small>{stock.ticker}</small>
              </div>
              <div className="stock-indicators">
                <span className={stock.changes >= 0 ? "success" : "fail"}>{stock.changes}</span>
                <small className={stock.changes >= 0 ? "percentageSuccess" : "percentageFail"}>{calcPercentage(stock.changes, stock.currentPrice)} %</small>
              </div>
            </li>
        )
      })}
    </ul>
  )
};

export default Stocks;