/* Cards2.js - cards com rolamento horizontal */
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Cards.css'; // Importando o CSS compartilhado

const Cards2 = () => {
  const { t } = useTranslation();
  const carouselRef = useRef(null);

  // Componente Card definido dentro de Cards2
  const Card = ({ titleKey, textKey, link, backgroundImg }) => {
    return (
      <div className="card" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <h3>{t(titleKey)}</h3>
        <p>{t(textKey)}</p>
        <a href={link}>{t('common.learnMore')}</a>
      </div>
    );
  };

  const cardInfo = [
    // Dados dos cards
    { titleKey: 'newsCards.card1.title', textKey: 'newsCards.card1.text', link: '/link1', backgroundImg: 'path/to/newsImage1.jpg' },
    { titleKey: 'newsCards.card2.title', textKey: 'newsCards.card2.text', link: '/link2', backgroundImg: 'path/to/newsImage2.jpg' },
    { titleKey: 'newsCards.card3.title', textKey: 'newsCards.card3.text', link: '/link3', backgroundImg: 'path/to/newsImage3.jpg' },
    { titleKey: 'newsCards.card4.title', textKey: 'newsCards.card4.text', link: '/link4', backgroundImg: 'path/to/newsImage4.jpg' },
    { titleKey: 'newsCards.card5.title', textKey: 'newsCards.card5.text', link: '/link5', backgroundImg: 'path/to/newsImage5.jpg' },

    // Adicione mais cards conforme necessário
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      if (direction === 'left') {
        current.scrollLeft -= current.offsetWidth;
      } else {
        current.scrollLeft += current.offsetWidth;
      }
    }
  };

  return (
    <div className="cards2-section">
      <h2 className="cards-title">{t('newsCards.sectionTitle')}</h2>
      <button className="scroll-button left" onClick={() => scroll('left')}>❮</button>
      <div className="cards2-container" ref={carouselRef}>
        {cardInfo.map((info, index) => (
          <Card key={index} {...info} />
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scroll('right')}>❯</button>
    </div>
  );
};

export default Cards2;
