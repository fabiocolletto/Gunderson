/* ServicePreview.js */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './ServicePreview.css'; // Importando o CSS personalizado

const ServiceSection = () => {
  const { t, i18n } = useTranslation();
  const serviceItems = i18n.getResourceBundle(i18n.language, 'translation').ServicePreview;

  return (
    <div className="service-container">
      <Swiper
        spaceBetween={20} // Espaçamento entre os slides
        slidesPerView={3} // Número de slides visíveis
        // Adicione outras configurações do Swiper conforme necessário
      >
        {Object.keys(serviceItems).map((key, index) => (
          <SwiperSlide key={index}>
            <div
              className="service-item"
              style={{ backgroundImage: `url(${serviceItems[key].background})` }}
            >
              <h3>{t(`ServicePreview.${key}.title`)}</h3>
              <p>{t(`ServicePreview.${key}.text`)}</p>
              <a href={serviceItems[key].link}>{t('ServicePreview.cardLink')}</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSection;
