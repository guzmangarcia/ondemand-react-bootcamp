import { useContext } from "react"
import styles from './FeaturedProducts.module.scss'
import CarouselGrid from '../CarouselGrid/CarouselGrid';
import { useNavigate, } from 'react-router-dom';
import { CartItemsContext } from '../../components/CartItemsContextProvider/CartItemsContextProvider'

export default function FeaturedProducts(props) {


    const navigate = useNavigate();
    const { cartItems, setCartItems } = useContext(CartItemsContext);
  //  console.log(cartItems)
   // console.log(setCartItems)

    // console.log("FeaturedProducts constructor******************",props.featuredProducts)  
    var featuredProducts = props.featuredProducts.map
        ((data) => {


            return data.srcs.map((image, index) => {

                return {
                    id: index + 1,
                    src: image.image.url,
                    alt: data.alt,
                    text: data.text,
                    navigationLink: data.navigationLink,
                    uniqueId: data.uniqueId,
                    stock:data.stock
                };
            })
        });
    // console.log(featuredProducts)  

    return (
        <div className={styles.featuredProducts}>
            <CarouselGrid gridName={'FeaturedProducts'}
                gridData={featuredProducts}
                buttonFunction={(id) => {  setCartItems([...cartItems,id]) }}
                buttonText='Add to cart' />
            <br />
            <div className={styles.featuredProducts}>
                <button className={styles.viewProductsButton} onClick={() => navigate('/products')} >View all products</button>
            </div>
            <br />
        </div>
    );


}