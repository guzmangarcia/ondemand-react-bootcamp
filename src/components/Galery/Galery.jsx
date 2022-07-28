import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './styles.css';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';

// install Swiper modules
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
            <SwiperSlide key={`${index}secondary`}>
              <img src={element.src} alt="prop" />
            </SwiperSlide>
          ))
}

      </Swiper>
    </>
  );
}
