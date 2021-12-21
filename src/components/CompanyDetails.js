import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCompany } from "../redux/company/company";
import GobakcBtn from "./GobackBtn";

const CompanyDetails = ({ symbol }) => {

  return (
    <div>
      <GobakcBtn path={'/popular'}/>

    </div>
  )
}

export default CompanyDetails;