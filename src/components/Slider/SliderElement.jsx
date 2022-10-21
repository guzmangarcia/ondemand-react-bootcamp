import { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';

export default function SliderElement({
  id, rangeValue, className, src, alt, text, count,
}) {
  const itemRef = createRef();

  useEffect(() => {
    itemRef.current.style.display = (id === rangeValue) ? 'block' : 'none';
  }, [id, rangeValue, itemRef]);

  return (
    <div ref={itemRef}>
      <div style={{ width: '100%' }}>
        <img
          className={className}
          src={src}
          alt={alt}
        />
        <div className={styles.text}>
          {text}
          {' '}
          (
          {id}
          /
          {count}
          )
        </div>
      </div>
    </div>
  );
}
SliderElement.propTypes = {
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rangeValue: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
};
