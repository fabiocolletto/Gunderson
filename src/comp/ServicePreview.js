import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicePreview.css';

const ServicePreview = () => {
  const { t } = useTranslation();

  return (
    <div className="main-cover">
      <div className="cover-content">
        {t('ServicePreview.text')}
      </div>
    </div>
  );
};

export default ServicePreview;
