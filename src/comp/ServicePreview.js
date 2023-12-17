/* ServicePreview.js */
import React from 'react'; // Importando o React
import { useTranslation } from 'react-i18next'; // Importando useTranslation do react-i18next para internacionalização
import './ServicePreview.css'; // Importando o arquivo CSS para o componente
import cardImage1 from '../images/service-card1.png'; // Importando a primeira imagem de fundo
import cardImage2 from '../images/service-card2.png'; // Importando a segunda imagem de fundo
import cardImage3 from '../images/service-card3.png'; // Importando a terceira imagem de fundo

const ServicePreview = () => {
  const { t } = useTranslation(); // Utilizando o hook useTranslation

  // Array com as informações dos cards
  const cards = [
    {
      title: t("ServicePreview.card1.title"), // Título do primeiro card
      text: t("ServicePreview.card1.text"), // Texto do primeiro card
      background: cardImage1, // Imagem de fundo do primeiro card
      link: "/services/shipbuilding" // Link específico para o primeiro serviço
    },
    {
      title: t("ServicePreview.card2.title"), // Título do segundo card
      text: t("ServicePreview.card2.text"), // Texto do segundo card
      background: cardImage2, // Imagem de fundo do segundo card
      link: "/services/marine-repair" // Link específico para o segundo serviço
    },
    {
      title: t("ServicePreview.card3.title"), // Título do terceiro card
      text: t("ServicePreview.card3.text"), // Texto do terceiro card
      background: cardImage3, // Imagem de fundo do terceiro card
      link: "/services/custom-engineering" // Link específico para o terceiro serviço
    }
  ];

  // Renderizando o componente
  return (
    <div className="service-preview">
      <h2>{t('ServicePreview.header')}</h2> 
      <div className="cards-container">
        {cards.map((card, index) => (
          <div 
            className="card" 
            key={index}
            style={{ backgroundImage: `url(${card.background})` }} // Aplicando a imagem de fundo de cada card
          >
            <h3>{card.title}</h3> 
            <p>{card.text}</p> 
            <a href={card.link}>{t('ServicePreview.cardLink')}</a> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePreview; // Exportando o componente ServicePreview
