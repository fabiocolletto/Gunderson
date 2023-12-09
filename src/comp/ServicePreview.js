import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicePreview.css';

const ServicePreview = () => {
  const { t } = useTranslation();

  const services = t('service_preview.services', { returnObjects: true });

  return (
    <div className="service-preview">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          {/* Link para a página detalhada do serviço, se necessário */}
          <a href={service.link}>{t('read_more')}</a>
        </div>
      ))}
    </div>
  );
};

export default ServicePreview;
