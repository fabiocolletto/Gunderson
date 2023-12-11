import React from 'react';
import { useTranslation } from 'react-i18next';
import './MainCover.css';
import backgroundImage from '../images/image-fp-homepage.jpg'; // Atualize o caminho

const MainCover = () => {
  const { t } = useTranslation();

  return (
    <div className="main-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="cover-content">
        {t('mainCover.text')}
      </div>
    </div>
  );
};

export default MainCover;
