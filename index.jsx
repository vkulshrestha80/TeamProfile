import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import TeamProfile from './components/TeamProfile/TeamProfile';
import About from './components/About/About';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<TeamProfile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
