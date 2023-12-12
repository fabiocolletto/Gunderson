import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './comp/Header';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Contact from './pages/Contact';
import News from './pages/News';
import MainCover from './comp/MainCover';
import ServicePreview from './comp/ServicePreview';
import NewsPreview from './comp/NewsPreview';
import AboutPreview from './comp/AboutPreview';
import ContactPreview from './comp/ContactPreview';



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
        <Route path="/maincover" element={<MainCover />} />
        <Route path="/servicepreview" element={<ServicePreview />} />
        <Route path="/newspreview" element={<NewsPreview />} />
        <Route path="/aboutpreview" element={<AboutPreview />} />
        <Route path="/contactpreview" element={<ContactPreview />} />



        {/* Outras rotas conforme necessário */}
      </Routes>
      <div>
      <MainCover /> {/* Incluindo o componente MainCover */}
      <ServicePreview />
      <NewsPreview />
      <AboutPreview />
      <ContactPreview />
    </div>
    </>
  );
}
export default App;