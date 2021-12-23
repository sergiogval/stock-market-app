import React from "react";
import renderer from 'react-test-renderer';
import { MemoryRouter } from "react-router-dom";
import Nav from '../components/Nav';

describe('Should load the navigation', ()=> {
  test('and should match the snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });
});