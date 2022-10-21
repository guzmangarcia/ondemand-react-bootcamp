import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCategories.module.scss';
import Carousel from '../Carousel/Carousel';

export default function ProductCategories({ productCategories }) {
  return (
    <div className={styles.parentdiv}>
      <Carousel className={styles.divCarrousell} carouselKeyIndex={1} carouselInitialSlideIndex={1} carouselName="productCategories" data={productCategories} />
    </div>
  );
}

ProductCategories.propTypes = {
  productCategories: PropTypes.arrayOf(PropTypes.shape(Carousel.propTypes)).isRequired,
};
