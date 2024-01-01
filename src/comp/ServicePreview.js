import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide, Navigation } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; // Importação do CSS de navegação
import './ServicePreview.css'; // Importando o CSS personalizado


const ServiceSection = () => {
  const { t, i18n } = useTranslation();
  const serviceItems = i18n.getResourceBundle(i18n.language, 'translation').ServicePreview || {};

  return (
    <div className="service-container">
      <Swiper
        spaceBetween={5} // Espaçamento entre os slides
        slidesPerView={3} // Número de slides visíveis
        navigation={true} // Habilita a navegação
      >
        {Object.keys(serviceItems).filter(key => key.startsWith('card')).map((key, index) => (
          <SwiperSlide key={index}>
            <div
              className="service-item"
              style={{ backgroundImage: `url(${serviceItems[key].background})` }}
            >
              <h3>{t(`ServicePreview.${key}.title`)}</h3>
              <p>{t(`ServicePreview.${key}.text`)}</p>
              <a href={serviceItems[key].link}>{t(`ServicePreview.${key}.cardLink`)}</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSection;
