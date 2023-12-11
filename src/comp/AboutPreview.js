import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPreview.css';

const ServicePreview = () => {
  const { t } = useTranslation();

  return (
    <div className="main-about">
      <div className="about-content">
        {t('AboutPreview.text')}
      </div>
    </div>
  );
};

export default ServicePreview;