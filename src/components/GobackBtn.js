import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const GobakcBtn = ({ path }) => (
  <Link to={path}>
    <button className="gobackBtn" type="button"> </button>
  </Link>
);

GobakcBtn.propTypes = {
  path: PropTypes.element.isRequired,
};

export default GobakcBtn;
