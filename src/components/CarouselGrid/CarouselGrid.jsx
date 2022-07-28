import PropTypes from 'prop-types';
import styles from './CarouselGrid.module.scss';
import Carousel from '../Carousel/Carousel';

export default function CarouselGrid({
  gridData, gridName, carouselName, carouselIndex, buttonFunction, buttonText, showButton,
}) {
  if (gridData === undefined || gridData?.length === 0) return (null);

  return (

    <div className={styles.styleCarrousel}>

      {gridData.map((carouselData, index) => (

        <Carousel
          className={styles.imageSmall}
          carouselName={gridName}
          carouselKeyIndex={index}
          key={`${carouselData[0].uniqueId}-${carouselName}-${carouselIndex}-${index}-${carouselData.id}`}
          carouselInitialSlideIndex={1}
          data={carouselData}
          uniqueId={carouselData[0].uniqueId}
          buttonFunction={() => { buttonFunction(carouselData[0]); }}
          buttonText={showButton(carouselData) ? buttonText : undefined}
        />

      ))}
    </div>

  );
}
CarouselGrid.propTypes = {
  gridData: PropTypes.string.isRequired,
  gridName: PropTypes.string.isRequired,
  carouselName: PropTypes.string.isRequired,
  carouselIndex: PropTypes.string.isRequired,
  buttonFunction: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  showButton: PropTypes.string.isRequired,

};
