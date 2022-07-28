import React, { useState } from 'react';

import styles from './Carrousel.module.scss';
import { CarouselElement } from './CarouselElement';

export default function Carousel({
  className,
  carouselName,
  carouselKeyIndex,
  carouselInitialSlideIndex,
  data,
  uniqueId,
  buttonText,
  buttonFunction,
}) {
  const [carouselCurrentSlideIndex, setCarouselCurrentSlideIndex] = useState(carouselInitialSlideIndex);

  function setIndex(nextIndex) {
    if (nextIndex > data.length) { setCarouselCurrentSlideIndex(1); } else if (nextIndex < 1) { setCarouselCurrentSlideIndex(setCarouselCurrentSlideIndex(data.length)); } else { setCarouselCurrentSlideIndex(nextIndex); }
  }

  function prevClick() {
    setIndex(carouselCurrentSlideIndex - 1);
  }
  function nextClick() {
    setIndex(carouselCurrentSlideIndex + 1);
  }

  function dotClick(dot) {
    setIndex(dot);
  }
  if (data === undefined || data?.length === 0) return (null);
  return (

    <div className={styles.styleCarrousel}>
      {
        data.map((item, index) => (
          <CarouselElement
            className={`${className}`}
            key={`${carouselName}-${carouselKeyIndex}-${index}-${item.id}`}
            count={data.length}
            carouselCurrentSlideIndex={carouselCurrentSlideIndex}
            {...item}
          />
        ))
      }
      <div className={`${styles.styleCarrouselDot} ${className}`}>
        <button className={styles.prev} onClick={prevClick}>❮</button>
        {data.map((item, index) => (
          <span
            className={styles.dot}
            key={`${carouselName}-${carouselKeyIndex}-${index}-${item.id}-dot`}
            onClick={(() => dotClick(index + 1))}
          />
        ))}

        <button className={styles.next} onClick={nextClick}>❯</button>
      </div>
      <div className={styles.divbutton}>
        {(buttonText !== undefined)
          && (
          <button
            className={styles.button}
            onClick={buttonFunction}
          >
            {buttonText}
          </button>
          )}
      </div>
    </div>

  );
}
