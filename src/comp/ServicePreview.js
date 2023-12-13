import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServicePreview.css';

const ServicePreview = () => {
  const { t } = useTranslation();

  // Caminhos corretos para as imagens de fundo dos cards
  const cardBackgroundImages = [
    '/images/service-card1.png', // Caminho para a imagem do primeiro card
    '/images/service-card2.png', // Caminho para a imagem do segundo card
    '/images/service-card3.png'   // Caminho para a imagem do terceiro card
  ];

  return (
    <div className="service-preview">
      <h2>{t('ServicePreview.header')}</h2>
      <div className="cards-container">
        {cardBackgroundImages.map((image, index) => (
          <div 
            className="card" 
            key={index} 
            style={{ backgroundImage: `url(${image})` }}
          >
            <h3>{t(`ServicePreview.card${index + 1}.title`)}</h3>
            <p>{t(`ServicePreview.card${index + 1}.text`)}</p>
            <a href="/service-page">{t('ServicePreview.cardLink')}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePreview;
