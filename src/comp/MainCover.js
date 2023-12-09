import React from 'react';
import { useTranslation } from 'react-i18next';
import './MainCover.css';

const MainCover = () => {
  const { t } = useTranslation();

  return (
    <div className="main-cover">
      <div className="cover-content">
        {t('mainCover.text')}
      </div>
    </div>
  );
};

export default MainCover;

