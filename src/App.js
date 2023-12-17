/* App.js */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TransparentHeader from './comp/TransparentHeader';
import HomePage from './pages/HomePage';
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
          <HomePage />
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
          <Contact />
        </>
      } />
      <Route path="/news" element={
        <>
          <News />
        </>
      } />
      {/* Adicione outras rotas conforme necessário, incluindo o Header se desejado */}
    </Routes>
  );
}

export default App;
