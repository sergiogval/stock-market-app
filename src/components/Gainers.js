import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGainers } from '../redux/gainers/gainers';
import GobakcBtn from './GobackBtn';
import Stocks from './Stocks';
import CompanyDetails from './CompanyDetails';
import '../assets/stylesheets/lists.css';
import '../assets/stylesheets/popular.css';

const Gainers = () => {
  const globalState = useSelector((state) => state.gainerReducer);
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
      dispatch(getGainers());
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

  const filterTheStocks = (e) => {
    if (e.target.value === 'lowestToHighiest') {
      setLocalState(globalState.sort((sA, sB) => (sA.changes > sB.changes ? 1 : -1)));
    } else if (e.target.value === 'highiestToLowest') {
      setLocalState(globalState.sort((sA, sB) => (sA.changes < sB.changes ? 1 : -1)));
    } else {
      setLocalState(globalState);
    }
  };

  return (
    <div className="popular-stock-container">
      <header>
        <GobakcBtn path="/" />
        <h1>Loser stocks</h1>
        <select name="sort" id="sortPopular" onChange={filterTheStocks}>
          <option value="showAll">Not sorted</option>
          <option value="lowestToHighiest">Lowest to Highest</option>
          <option value="highiestToLowest">Highest to Lowest </option>
        </select>
      </header>
      <Stocks list={localState} viewDetails={openDetails} />
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

export default Gainers;
