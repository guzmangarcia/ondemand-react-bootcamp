import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles.css';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default function Galery({ data }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (data === undefined) return null;

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2"
      >
        {
          data.map((element, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={`${index}main`}>
              <img src={element.src} alt="prop" />
            </SwiperSlide>
          ))
        }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="mySwiper"
      >
        {

          data.map((element, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={`${index}secondary`}>
              <img src={element.src} alt="prop" />
            </SwiperSlide>
          ))
        }

      </Swiper>
    </>
  );
}
Galery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ src: PropTypes.string.isRequired })).isRequired,

};
