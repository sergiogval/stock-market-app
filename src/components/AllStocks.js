/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { getAll } from '../redux/allstocks/allstocks';
import GobakcBtn from './GobackBtn';
import CompanyDetails from './CompanyDetails';
import '../assets/stylesheets/lists.css';
import '../assets/stylesheets/popular.css';

const AllStocks = () => {
  const globalState = useSelector((state) => state.allStocksReducer);
  const dispatch = useDispatch();
  const [localState, setLocalState] = useState([]);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [targetSymbol, setTargetSymbol] = useState('');

  const openDetails = (e) => {
    setTargetSymbol(e.target.id);
    setDetailsOpen(true);
    setTimeout(() => {
      setPopupOpen(true);
    }, 200);
  };

  useEffect(() => {
    if (!globalState.length) {
      dispatch(getAll());
      setLocalState(globalState);
    } else {
      setLocalState(globalState);
    }
  }, [globalState]);

  const closeDetails = () => {
    setPopupOpen(false);
    setTimeout(() => {
      setDetailsOpen(false);
    }, 200);
  };

  // const filterTheStocks = (e) => {
  //   if (e.target.value === 'increasedInPrice') {
  //     setLocalState(globalState.filter(((stock) => stock.changes >= 0)));
  //   } else if (e.target.value === 'decreasedInPrice') {
  //     setLocalState(globalState.filter(((stock) => stock.changes < 0)));
  //   } else {
  //     setLocalState(globalState);
  //   }
  // };

  return (
    <div className="all-stocks-container">
      <header>
        <GobakcBtn path="/" />
        <hgroup>
          <h1>All stocks</h1>
          <small>Number of stocks: </small>
          <small>{localState.length}</small>
        </hgroup>
        <input type="text" placeholder="Search by stock symbol..." />
      </header>
      <div className="main">
        <ul>
          {localState.map((stock) => (
            <li key={uniqid()} id={stock.ticker} onClick={openDetails}>
              <div id={stock.ticker} className="all-stock-info">
                <p id={stock.ticker}>{stock.name}</p>
                <small id={stock.ticker}>{stock.ticker}</small>
              </div>
              <h3 id={stock.ticker}>
                USD
                {stock.currentPrice}
              </h3>
            </li>
          ))}
        </ul>
      </div>
      {detailsOpen
        ? (
          <CompanyDetails
            symbol={targetSymbol}
            openClass={popupOpen ? 'details-open' : ''}
            closeFunction={closeDetails}
          />
        )
        : null }
    </div>

  );
};

export default AllStocks;
