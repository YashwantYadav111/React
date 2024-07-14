import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Men from './pages/Men';
import Women from './pages/Women';
import Kid from './pages/kid';

import Navbar from './components/Navbar';
import TopStrip from './components/TopStrip';
function App() {
  return (
    <div>
      <TopStrip />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/kid" element={<Kid />}></Route>
      </Routes>
    </div>
  );
}

export default App;