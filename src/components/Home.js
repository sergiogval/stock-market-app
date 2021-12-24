import React, { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import '../assets/stylesheets/home.css';

const Home = () => {
  const [searchOn, setSearchOn] = useState(false);

  const openSearchBar = () => setSearchOn(true);
  const closeSearchBar = () => setSearchOn(false);

  return (
    <div className="main-container">
      <Header
        handelEvent={openSearchBar}
        handelCloseEvent={closeSearchBar}
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
      <Nav />
      <Footer />
    </div>
  );
};

export default Home;
