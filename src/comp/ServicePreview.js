import React from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './ServicePreview.css';

SwiperCore.use([Navigation]);

const ServicePreview = () => {
  const { t, i18n } = useTranslation();
  const serviceItems = i18n.getResourceBundle(i18n.language, 'translation').ServicePreview || {};

  return (
    <div className="service-container">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        modules={[Navigation]} 
        navigation={true}
      >
        {Object.keys(serviceItems).filter(key => key.startsWith('card')).map((key, index) => (
          <SwiperSlide key={index}>
            <div
             className="service-item"
             style={{ backgroundImage: `url(${process.env.PUBLIC_URL + serviceItems[key].background})` }}
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

export default ServicePreview;
