import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './Carrousel.module.scss';

export default function CarouselElement({
  className, count, carouselCurrentSlideIndex, src, alt, text, id, navigationLink,
}) {
  const itemRef = React.createRef();
  const navigate = useNavigate();

  useEffect(() => {
    itemRef.current.style.display = (id === carouselCurrentSlideIndex) ? 'block' : 'none';
  }, [id, carouselCurrentSlideIndex, itemRef]);

  return (
    <div ref={itemRef} className={styles.carrouselMainStyle}>
      <div className={`${styles.fade}`}>

        <div>
          <img
            src={src}
            alt={alt}
            onClick={() => {
              if (navigationLink !== undefined) {
                navigate(navigationLink);
              }
            }}
            className={`${styles.styleCarrouselImage} ${className}`}
          />
        </div>
        <div className={styles.divtext}>
          {text.map((element, index) => (
            <div key={`${text} ${index}`} className={styles.text}>
              {element}
              {' '}
            </div>
          ))}

          <div className={styles.text}>
            {' '}
            (
            {id}
            /
            {count}
            )
          </div>
        </div>
      </div>
    </div>
  );
}

CarouselElement.propTypes = {
  className: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
  carouselCurrentSlideIndex: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  navigationLink: PropTypes.string.isRequired,
};
