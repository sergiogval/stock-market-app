import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Popular from './components/Popular';
import Gainers from './components/Gainers';
import Losers from './components/Losers';
import './assets/stylesheets/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/gainers" element={<Gainers />} />
          <Route path="/losers" element={<Losers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
