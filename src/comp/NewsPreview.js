// NewsPreview.js
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NewsPreview.css';

const NewsPreview = () => {
  const { t } = useTranslation();
  const newsItems = t('News.newsItems', { returnObjects: true });
  const carouselRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`news-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <h2>{t('News.header')}</h2>
      <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>
      <div className="news-preview" ref={carouselRef}>
        {newsItems.map((news, index) => (
          <div
            key={index}
            className={`news-item ${isDarkMode ? 'dark-mode' : ''}`}
            style={{ backgroundImage: `url(${news.image})` }}
          >
            <h3>{news.title}</h3>
            <p>{news.text}</p>
            <a href={news.link}>{t('News.readMore')}</a>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? '☀️' : '🌙'}
      </div>
    </div>
  );
};

export default NewsPreview;
