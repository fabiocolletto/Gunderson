import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPreview.css';

const ServicePreview = () => {
  const { t } = useTranslation();

  return (
    <div className="main-contact">
      <div className="contact-content">
        {t('ContactPreview.text')}
      </div>
    </div>
  );
};

export default ServicePreview;