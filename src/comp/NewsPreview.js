import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './NewsPreview.css';

const NewsPreview = () => {
  const { t } = useTranslation();
  const newsCards = t('NewsPreview.cards', { returnObjects: true });
  const containerRef = useRef(null);
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(true);

  useEffect(() => {
    if (Array.isArray(newsCards)) {
      // Códigos de atualização de estado ou efeitos colaterais
      // Relacionados ao carregamento de newsCards
    }
  }, [newsCards]);

  const scroll = (direction) => {
    const { current } = containerRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const checkScrollButtons = () => {
    const { current } = containerRef;
    if (current) {
      setShowScrollLeft(current.scrollLeft > 0);
      setShowScrollRight(current.scrollLeft < current.scrollWidth - current.offsetWidth);
    }
  };

  return (
    <div className="news-preview">
      <h2>{t('NewsPreview.header')}</h2>
      <div className="cards-container" ref={containerRef} onScroll={checkScrollButtons}>
        {Array.isArray(newsCards) && newsCards.map((news, index) => (
          <div className="news-card" key={index} style={{ backgroundImage: `url(${news.background})` }}>
            <h3>{news.title}</h3>
            <p>{news.text}</p>
            <a href={news.link}>{t('NewsPreview.readMore')}</a>
          </div>
        ))}
      </div>
      {showScrollLeft && <button className="scroll-buttonn left" onClick={() => scroll('left')}>◀</button>}
      {showScrollRight && <button className="scroll-buttonn right" onClick={() => scroll('right')}>▶</button>}
    </div>
  );
};

export default NewsPreview;
