/* Script Card.js - 3 cards fixos */
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Cards.css';

const Card = ({ titleKey, textKey, link, backgroundImg }) => {
  const { t } = useTranslation();

  return (
    <div className="card" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h3>{t(titleKey)}</h3>
      <p>{t(textKey)}</p>
      <a href={link}>{t('common.learnMore')}</a>
    </div>
  );
};

const Cards = () => {
  const { t } = useTranslation();

  const cardInfo = [
    { titleKey: 'cards.card1.title', textKey: 'cards.card1.text', link: '/link1', backgroundImg: 'path/to/image1.jpg' },
    { titleKey: 'cards.card2.title', textKey: 'cards.card2.text', link: '/link2', backgroundImg: 'path/to/image2.jpg' },
    { titleKey: 'cards.card3.title', textKey: 'cards.card3.text', link: '/link3', backgroundImg: 'path/to/image3.jpg' },
  ];

  return (
    <div className="cards-section">
      <h2 className="cards-title">{t('cards.sectionTitle')}</h2>
      <div className="cards-container">
        {cardInfo.map((info, index) => (
          <Card key={index} {...info} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
