/* Script Servicep.js - 3 cards fixos contendo informações sobre os serviços prestados pela empresa */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Servicep.css';
import servicep1 from '../images/servicep1.png';
import servicep2 from '../images/servicep2.png';
import servicep3 from '../images/servicep3.png';

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
      backgroundImg: servicep1,
    },
    {
      titleKey: 'servicep.card2.title',
      textKey: 'servicep.card2.text',
      link: '/link2',
      backgroundImg: servicep2,
    },
    {
      titleKey: 'servicep.card3.title',
      textKey: 'servicep.card3.text',
      link: '/link3',
      backgroundImg: servicep3,
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
