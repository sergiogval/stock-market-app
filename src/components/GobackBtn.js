import React from "react";
import { Link } from "react-router-dom";

const GobakcBtn = ({path}) => (
  <Link to={path}>
    <button>⬅ </button>
  </Link>
);

export default GobakcBtn;