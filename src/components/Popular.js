import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/popular/popular';
import GobakcBtn from './GobackBtn';
import Stocks from './Stocks';
import CompanyDetails from './CompanyDetails';
import '../assets/stylesheets/lists.css';
import '../assets/stylesheets/popular.css';

const Popular = () => {
  const globalState = useSelector((state) => state.popularReducer);
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
      dispatch(getData());
    } else {
      setLocalState(globalState);
    }
  }, []);

  const closeDetails = () => {
    setPopupOpen(false);
    setTimeout(() => {
      setDetailsOpen(false);
    }, 200);
  };

  const filterTheStocks = (e) => {
    if (e.target.value === 'increasedInPrice') {
      setLocalState(globalState.filter(((stock) => stock.changes >= 0)));
    } else if (e.target.value === 'decreasedInPrice') {
      setLocalState(globalState.filter(((stock) => stock.changes < 0)));
    } else {
      setLocalState(globalState);
    }
  };

  return (
    <div className="popular-stock-container">
      <header>
        <GobakcBtn path="/" />
        <h1>Popular stocks</h1>
        <select name="sort" id="sortPopular" onChange={filterTheStocks}>
          <option value="showAll">All</option>
          <option value="increasedInPrice">Risen in price</option>
          <option value="decreasedInPrice">Fallen in price </option>
        </select>
      </header>
      <Stocks list={localState.length ? localState : globalState} viewDetails={openDetails} />
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

export default Popular;
