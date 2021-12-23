import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/Footer';

describe('Should render the footer page', () => {
  test('and should match the snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON;
    expect(tree).toMatchSnapshot();
  });
});
