import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import '../assets/stylesheets/home.css';

const Home = () => (
  <div className="main-container">
    <Header />
    <Nav />
    <Footer />
  </div>
);

export default Home;
