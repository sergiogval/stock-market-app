import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { getAll } from '../redux/allstocks/allstocks';
import CompanyDetails from './CompanyDetails';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import '../assets/stylesheets/home.css';
import '../assets/stylesheets/lists.css';
import '../assets/stylesheets/popular.css';

const Home = () => {
  const globalState = useSelector((state) => state.allStocksReducer);
  const dispatch = useDispatch();
  const [localState, setLocalState] = useState([]);
  const [searchOn, setSearchOn] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [targetSymbol, setTargetSymbol] = useState('');

  useEffect(() => {
    if (!globalState.length) {
      dispatch(getAll());
      setLocalState(globalState);
    } else {
      setLocalState(globalState);
    }
  }, [globalState]);

  const openDetails = (e) => {
    setTargetSymbol(e.target.id);
    setDetailsOpen(true);
    setTimeout(() => {
      setPopupOpen(true);
    }, 200);
  };

  const closeDetails = () => {
    setPopupOpen(false);
    setTimeout(() => {
      setDetailsOpen(false);
    }, 200);
  };

  const filterTheStocks = (e) => {
    if (e.target.value === '') {
      setLocalState(globalState);
    } else {
      setLocalState(
        localState.filter((stock) => {
          const regex = new RegExp(e.target.value, 'gi');
          return stock.symbol.match(regex) || stock.name.match(regex);
        }),
      );
    }
  };

  const openSearchBar = () => setSearchOn(true);
  const closeSearchBar = () => setSearchOn(false);

  return (
    <div className={`main-container ${searchOn ? 'search-mode' : ''} `}>
      <Header
        handelEvent={openSearchBar}
        handelCloseEvent={closeSearchBar}
        handleSearch={filterTheStocks}
        active={
          searchOn
            ? 'search-is-on'
            : ''
        }
        nonActive={
          searchOn
            ? 'inner-header-search'
            : ''
        }
      />
      {
        searchOn
          ? (
            <div className="home-main">
              <ul>
                {localState.map((stock) => (
                  <button key={uniqid()} type="button" className="single-stock" id={stock.symbol} onClick={openDetails}>
                    <div id={stock.symbol} className="all-stock-info">
                      <p id={stock.symbol}>{stock.name}</p>
                      <small id={stock.symbol}>{stock.symbol}</small>
                    </div>
                    <h3 id={stock.symbol}>
                      USD
                      {stock.price}
                    </h3>
                  </button>
                ))}
              </ul>
            </div>
          )
          : <Nav />
      }
      <Footer />
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

export default Home;
