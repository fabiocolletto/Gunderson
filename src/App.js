import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './comp/Header';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        {/* Outras rotas conforme necessário */}
      </Routes>
    </>
  );
}
export default App;