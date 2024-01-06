import React, { startTransition } from 'react';
import { Routes, Route } from 'react-router-dom';
import TransparentHeader from './comp/TransparentHeader';
import MainCover from './comp/MainCover';

import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  return (
    <div>
      <TransparentHeader />
      <Routes>
        <Route path="/" element={
          <>
            <MainCover />

          </>
        } />
        <Route path="/homepage" element={
          <>
            <MainCover />

          </>
        } />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}

export default App;