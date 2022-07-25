import React from "react"
import PropTypes from "prop-types"
import styles from './CarouselGrid.module.scss'
import Carousel from '../Carousel/Carousel'



export default class CarouselGrid extends React.Component {


    constructor(props) {
        super(props)
        this.state = {

        }


    }


    static propTypes = {
        gridData: PropTypes.array.isRequired,
        gridName: PropTypes.string.isRequired,

    }



    render() {
        return (

            <div className={styles.styleCarrousel} >
                {/* {console.log(this.props.gridData)} */}
                {this.props.gridData.map((item, index) => (

                    <Carousel
                        className={styles.imageSmall}
                        carouselName={this.props.gridName}
                        carouselKeyIndex={index}
                        key={`${this.props.carouselName}-${this.props.carouselIndex}-${index}-${item.id}`}
                        carouselCurrentSlideIndex={1}
                        data={item} />

                ))

                }
            </div >

        );

    };






}