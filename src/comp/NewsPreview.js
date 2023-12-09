import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './NewsPreview.css';

const NewsPreview = () => {
  const { t } = useTranslation();
  const newsItems = t('news', { returnObjects: true });
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const { current } = carouselRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="news-preview-container">
      <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>
      <div className="news-preview" ref={carouselRef}>
      {newsItems.map((news, index) => (
  <div key={index} className="news-item" style={{ backgroundImage: `url(${news.image})` }}>
    <h3>{news.title}</h3>
    <p>{news.summary}</p>
    <a href={news.link}>{t('read_more')}</a>
  </div>
))}
      </div>
      <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
    </div>
  );
};

export default NewsPreview;