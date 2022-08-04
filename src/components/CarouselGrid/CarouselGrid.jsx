import PropTypes from 'prop-types';
import styles from './CarouselGrid.module.scss';
import Carousel from '../Carousel/Carousel';

export default function CarouselGrid({
  gridData, gridName, carouselName, carouselIndex, buttonFunction, buttonText, showButton,
}) {
  if (gridData === undefined) return (<div>Loading...</div>);
  if (gridData.length === 0) return (<div>No elements found</div>);

  return (

    <div className={styles.styleCarrousel}>

      {gridData.map((carouselData, index) => (

        <Carousel
          className={styles.imageSmall}
          carouselName={gridName}
          carouselKeyIndex={index}
          key={`${carouselData[0].uniqueId}-${carouselName}-${carouselIndex}${carouselData.id}`}
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
  gridData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(Carousel.propTypes))),
  gridName: PropTypes.string,
  carouselName: PropTypes.string,
  carouselIndex: PropTypes.number,
  buttonFunction: PropTypes.func,
  buttonText: PropTypes.string,
  showButton: PropTypes.func,

};

CarouselGrid.defaultProps = {
  gridData: undefined,
  gridName: '',
  carouselName: '',
  carouselIndex: 0,
  buttonFunction: undefined,
  buttonText: undefined,
  showButton: (() => false),

};
