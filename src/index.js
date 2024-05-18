import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Home from './Pages/Home';
import Rastreio from './Pages/Rastreio';
import HomeStore from './Pages/HomeStore';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const routing = (
  <Router>
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path=':store/:id' element={<HomeStore />} />
      <Route path='rastreio/:id' element={<Rastreio />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

reportWebVitals();
