import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

const SlideCard = () => {
  useEffect(() => {
    const swiper = new Swiper('.slide-content', {
      slidesPerView: 3,
      spaceBetween: 25,
      loop: true,
      centerSlide: true,
      fade: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        520: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <div className="slide-container">
      <div className="slide-content swiper-container">
        <div className="swiper-wrapper">
          {/* Adicione seus cartões individuais aqui */}
          <div className="swiper-slide card">
            <div className="image-content">
              {/* Conteúdo da imagem */}
            </div>
            <div className="card-content">
              {/* Conteúdo do cartão */}
            </div>
            <button className="button">Saiba mais</button>
          </div>
          {/* Adicione mais cartões conforme necessário */}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next swiper-navBtn"></div>
        <div className="swiper-button-prev swiper-navBtn"></div>
      </div>
    </div>
  );
};

export default SlideCard;
