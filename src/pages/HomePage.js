import React from 'react';
import MainCover from '../comp/MainCover'; // Caminho correto já que está na mesma pasta de comp
import ServicePreview from '../comp/ServicePreview'; // Caminho correto já que está na mesma pasta de comp
import NewsPreview from '../comp/NewsPreview'; // Caminho correto já que está na mesma pasta de comp
import AboutPreview from '../comp/AboutPreview'; // Caminho correto já que está na mesma pasta de comp
import ContactPreview from '../comp/ContactPreview'; // Caminho correto já que está na mesma pasta de comp


const HomePage = () => {
  return (
    <div>
      <MainCover /> {/* Incluindo o componente MainCover */}
      <ServicePreview />
      <NewsPreview />
      <AboutPreview />
      <ContactPreview />

    </div>
  );
};

export default HomePage;
