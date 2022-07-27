import React from 'react';
import PropTypes from "prop-types"
import styles from './ProductCategories.module.scss'
import Carousel from '../Carousel/Carousel';

export default class ProductCategories extends React.Component {
    constructor(props) {
        super(props)

        this.state = { productCategories: this.props.productCategories }
    }

    static propTypes = {
        productCategories: PropTypes.array.isRequired,
    }

    render() {


        return (
            <div className={styles.parentdiv}>
                <Carousel className={styles.divCarrousell} carouselKeyIndex={1} carouselInitialSlideIndex={1} carouselName={'productCategories'} data={this.state.productCategories} />
            </div>
        );
    }
}