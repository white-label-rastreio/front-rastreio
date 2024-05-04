import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './Pages/Home';
import Rastreio from './Pages/Rastreio';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const routing = (
  <Router>
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/rastreio' element={<Rastreio />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

reportWebVitals();
