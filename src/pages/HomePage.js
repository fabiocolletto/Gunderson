import React from 'react';
import Header from '../comp/Header';
import MainCover from '../comp/MainCover'; // Caminho correto já que está na mesma pasta de comp

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainCover /> {/* Incluindo o componente MainCover */}
    </div>
  );
};

export default HomePage;
