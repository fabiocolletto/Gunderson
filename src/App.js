import React from 'react';
import { ThemeProvider } from './comp/ThemeContext'; // Certifique-se de que o caminho para ThemeContext.js está correto
import { Routes, Route } from 'react-router-dom';
import Header from './comp/Header'; // Verifique o caminho correto
import MainCover from './comp/MainCover'; // Verifique o caminho correto
import Servicep from './comp/Servicep'; // Verifique o caminho correto
import Newsp from './comp/Newsp'; // Verifique o caminho correto
import Contactp from './comp/Contactp'; // Verifique o caminho correto
import SocialMediaLinks from './comp/SocialMediaLinks'; // Verifique o caminho correto


import AboutUs from './pages/AboutUs'; // Verifique o caminho correto
import Services from './pages/Services'; // Verifique o caminho correto
import Contact from './pages/Contact'; // Verifique o caminho correto
import News from './pages/News'; // Verifique o caminho correto

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <MainCover />
              <Servicep />
              <Newsp />
              <Contactp />
              <SocialMediaLinks />

            </>
          } />
          <Route path="/homepage" element={
            <>
            <MainCover />
            <Servicep />
            <Newsp />
            <Contactp />
            <SocialMediaLinks />

          </>
        } />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
