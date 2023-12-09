import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPreview.css';

const AboutPreview = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 4 ? 0 : current + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="ourHistory" className="about-section">
      <div className="card card-left">
        <h1>{t('about.title')}</h1>
        {Array.from({ length: 2 }, (_, i) => (
          <p key={i}>{t(`about.text.part${i + 1}`)}</p>
        ))}
        <a href="/about">{t('about.readMore')}</a>
      </div>
      <div className="card card-right">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            src={`/images/aboutus${index + 1}.png`}
            alt={`About us ${index + 1}`}
            className={index === activeIndex ? 'active' : 'hidden'}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutPreview;
