/* Newsp.js - sessao da home pagem contenendo cards das ultimas noticias postadas em outras mideas */

import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Newsp.css';

// Importando as imagens com base na estrutura de diretórios fornecida
import newsp1 from '../images/newsp1.svg';
import newsp2 from '../images/newsp2.svg';
import newsp3 from '../images/newsp3.svg';
import newsp4 from '../images/newsp4.svg';
import newsp5 from '../images/newsp5.svg';

const newspImages = [newsp1, newsp2, newsp3, newsp4, newsp5]; // Array de imagens importadas

const NewspCard = ({ link, backgroundImg }) => {
  const { t } = useTranslation(); // Hook para utilizar a função de tradução

  return (
    <div className="newsp-card" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <a className="newsp-link" href={link}>{t('common.learnMore')}</a>
    </div>
  );
};

const Newsp = () => {
  const { t } = useTranslation(); // Hook para utilizar a função de tradução
  const containerRef = useRef(null); // Ref para o container dos cards
  const [showScrollLeft, setShowScrollLeft] = useState(false);
  const [showScrollRight, setShowScrollRight] = useState(true);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -containerRef.current.offsetWidth, behavior: 'smooth' });
      updateScrollButtons();
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: containerRef.current.offsetWidth, behavior: 'smooth' });
      updateScrollButtons();
    }
  };

  const updateScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowScrollLeft(scrollLeft > 0);
      setShowScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('scroll', updateScrollButtons);
    updateScrollButtons(); // Para atualizar imediatamente após a montagem
    return () => container.removeEventListener('scroll', updateScrollButtons);
  }, []);

  const cardInfo = newspImages.map((imgSrc, index) => ({
    link: `/news-link-${index + 1}`, // Este é um placeholder, substitua pelos links reais
    backgroundImg: imgSrc,
  }));

  return (
    <div className="newsp-section">
      <h2 className="newsp-title">{t('newsp.sectionTitle')}</h2>
      {showScrollLeft && <button className="newsp-scroll-button left" onClick={scrollLeft}>&lt;</button>}
      <div className="newsp-container" ref={containerRef}>
        {cardInfo.map((info, index) => <NewspCard key={index} {...info} />)}
      </div>
      {showScrollRight && <button className="newsp-scroll-button right" onClick={scrollRight}>&gt;</button>}
    </div>
  );
};

export default Newsp;
