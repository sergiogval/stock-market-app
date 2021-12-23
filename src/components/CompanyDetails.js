import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getCompany } from '../redux/company/company';

const CompanyDetails = ({ symbol, closeFunction, openClass }) => {
  const globalState = useSelector((state) => state.companyReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompany(symbol));
  }, []);

  return (
    <div className={`stock-details ${openClass}`}>
      <header className="st-header">
        <button type="button" className="gobackBtn" onClick={closeFunction}> </button>
        <h2>{globalState.name}</h2>
      </header>
      <div className={`company-stock-info ${globalState.changes >= 0 ? 'success' : 'fail'}`}>
        <p>
          Ticker:
          {globalState.symbol}
        </p>
        <div>
          <span>
            Current Stock Price: USD
            {globalState.stockPrice}
          </span>
          <small>{`${globalState.changes >= 0 ? 'Incresed by +' : 'Decreased by: '} ${globalState.changes}`}</small>
        </div>
      </div>
      <div className="company-details">
        <div className="image-cont">
          <img src={globalState.image} alt="" />
        </div>
        <div className="info-cont">
          <p className="info-para">{globalState.describtion}</p>
          <p>
            <b>IPO start date: </b>
            {globalState.ipoDate}
          </p>
        </div>
      </div>
    </div>
  );
};

CompanyDetails.propTypes = {
  symbol: PropTypes.element.isRequired,
  closeFunction: PropTypes.element.isRequired,
  openClass: PropTypes.element.isRequired,
};

export default CompanyDetails;
