import { useState } from 'react';
import PropTypes, { element } from 'prop-types';
import styles from './Slider.module.scss';
import SliderElement from './SliderElement';

export default function Slider({ elements }) {
  const [rangeValue, setRangeValue] = useState(1);

  function onChange(value) {
    setRangeValue(parseInt(value, 10));
  }
  console.log(elements);

  return (
    <div className={styles.text}>
      <div>
        {elements.map((item) => (
          <SliderElement
            className={styles.slideShowContainer}
            key={item.id}
            id={item.id}
            count={elements.length}
            rangeValue={rangeValue}
            {...item}
          />
        ))}
        <input
          type="range"
          min="1"
          max={elements.length}
          value={rangeValue}
          onChange={(e) => onChange(e.currentTarget.value)}
          className="slider"
        />
      </div>
    </div>
  );
}

Slider.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      },

    ),
  ).isRequired,
};
