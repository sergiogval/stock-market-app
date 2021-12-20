import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/popular/popular";
import GobakcBtn from "./GobackBtn";

const Popular = () => {
  const popularState = useSelector(state => state.popularReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);
  
  
  return (
    <div>
      <GobakcBtn />
      <h1>Popular stocks</h1>
    </div>
  )
};

export default Popular;