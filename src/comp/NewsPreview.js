import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './NewsPreview.css';

const NewsPreview = () => {
  const { t } = useTranslation();
  const newsCards = t('NewsPreview.cards', { returnObjects: true });
  const containerRef = useRef(null);
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(true);

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

  useEffect(() => {
    checkScrollButtons();
  }, []); // Verifica os botões de rolagem na montagem do componente

  return (
    <div className="news-preview">
      <h2>{t('NewsPreview.header')}</h2>
      <div className="cards-container" ref={containerRef} onScroll={checkScrollButtons}>
        {newsCards.map((news, index) => (
          <div className="news-card" key={index} style={{ backgroundImage: `url(${news.background})` }}>
            <h3>{news.title}</h3>
            <p>{news.text}</p>
            <a href={news.link}>{t('NewsPreview.readMore')}</a>
          </div>
        ))}
      </div>
      {showScrollLeft && <button className="scroll-button left" onClick={() => scroll('left')}>◀</button>}
      {showScrollRight && <button className="scroll-button right" onClick={() => scroll('right')}>▶</button>}
    </div>
  );
};

export default NewsPreview;
