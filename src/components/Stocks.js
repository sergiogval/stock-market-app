import React from "react";
import uniqid from 'uniqid';
import { Link } from "react-router-dom";

const Stocks = ({list}) => {

  const calcPercentage = (change, originalPrice) => Math.floor((change * 100) / (Number(originalPrice) + (-1 * change)));
  
  return (
    <ul className="stockList">
      {list.map(stock => {
        return (
          <Link to="/popular/compDetails">
            <li key={uniqid()}>
              <p>{stock.name}</p>
              <div className="stock-indicators">
                <span className={stock.changes >= 0 ? "sucsess" : "fail"}>{stock.changes}</span>
                <small>{calcPercentage(stock.changes, stock.currentPrice)} %</small>
              </div>
            </li>
          </Link>
        )
      })}
    </ul>
  )
};

export default Stocks;