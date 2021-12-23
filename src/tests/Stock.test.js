import React from "react";
import renderer from 'react-test-renderer';
import Stocks from '../components/Stocks';

const tempList = [
  {
    name: "test",
    ticker: "test",
    changes: 10,
    currentPrice: 110,
  },
  {
    name: "test",
    ticker: "test",
    changes: 10,
    currentPrice: 110,
  },
  {
    name: "test",
    ticker: "test",
    changes: 10,
    currentPrice: 110,
  }
];

const removeFunction = () => [];

describe('Should render the Header page', () => {
test('and should match the snapshot', () => {
  const tree = renderer.create(<Stocks list={tempList} viewDetails={removeFunction}/>).toJSON;
  expect(tree).toMatchSnapshot();
});
});