import React from "react"
import styles from './FeaturedProducts.module.scss'
import CarouselGrid from '../CarouselGrid/CarouselGrid';
import { useNavigate } from 'react-router-dom';

export default function FeaturedProducts(props) 
  {


    const  navigate=useNavigate();

        //   console.log("FeaturedProducts constructor******************",this.props.featuredProducts)  
        var featuredProducts = props.featuredProducts.map
            ((data) => {


                return data.srcs.map((image, index) => {

                    return {
                        id: index + 1,
                        src: image.image.url,
                        alt: data.alt,
                        text: data.text
                    };
                })
            });


        return (
            <div className={styles.featuredProducts}>
                <CarouselGrid gridName={'FeaturedProducts'} gridData={featuredProducts} />
                <br/>
                <div className={styles.featuredProducts}>
                    <button className={styles.viewProductsButton} onClick={()=> navigate('/products') } >View all products</button>
                </div>
                <br/>
            </div>
        );
    

}