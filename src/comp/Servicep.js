/* Script Servicep.js - 3 cards fixos contendo informações sobre os serviços prestados pela empresa */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Servicep.css';

const ServicepCard = ({ titleKey, textKey, link, backgroundImg }) => {
  const { t } = useTranslation();

  return (
    <div className="card" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h3 className="card-title">{t(titleKey)}</h3>
      <p className="card-text">{t(textKey)}</p>
      <a className="card-link" href={link}>{t('common.learnMore')}</a>
    </div>
  );
};

const Servicep = () => {
  const { t } = useTranslation();

  const cardInfo = [
    {
      titleKey: 'servicep.card1.title',
      textKey: 'servicep.card1.text',
      link: '/link1',
      backgroundImg: '/images/service-card1.png',
    },
    {
      titleKey: 'servicep.card2.title',
      textKey: 'servicep.card2.text',
      link: '/link2',
      backgroundImg: '/images/service-card2.png',
    },
    {
      titleKey: 'servicep.card3.title',
      textKey: 'servicep.card3.text',
      link: '/link3',
      backgroundImg: '/images/service-card3.png',
    },
  ];

  return (
    <div className="cards-section">
      <h2 className="cards-title">{t('servicep.sectionTitle')}</h2>
      <div className="cards-container">
        {cardInfo.map((info, index) => (
          <ServicepCard key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Servicep;
