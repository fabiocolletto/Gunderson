/* App.js */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TransparentHeader from './comp/TransparentHeader';
import MainCover from './comp/MainCover';
import ServicePreview from './comp/ServicePreview';


import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <TransparentHeader />
          <MainCover />
          <ServicePreview />
        </>
      } />
      <Route path="/aboutus" element={
        <>
          <TransparentHeader />
          <AboutUs />
        </>
      } />
      <Route path="/services" element={
        <>
          <TransparentHeader />
          <Services />
        </>
      } />
      <Route path="/contact" element={
        <>
          <TransparentHeader />
          <Contact />
        </>
      } />
      <Route path="/news" element={
        <>
          <TransparentHeader />
          <News />
        </>
      } />
      <Route path="/homepage" element={
        <>
          <TransparentHeader />
          <MainCover />
          <ServicePreview />
        </>
      } />
    </Routes>
  );
}
export default App



