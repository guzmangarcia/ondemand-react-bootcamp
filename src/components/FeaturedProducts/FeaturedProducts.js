import { useContext } from "react"
import styles from './FeaturedProducts.module.scss'
import CarouselGrid from '../CarouselGrid/CarouselGrid';
import { useNavigate, } from 'react-router-dom';
import { UserDetailsContext } from '../../components/UserDetailsContextProvider/UserDetailsContextProvider'

export default function FeaturedProducts(props) {


    const navigate = useNavigate();
    const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  //  console.log(userDetails)
   // console.log(setUserDetails)

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
                    uniqueId: data.uniqueId
                };
            })
        });
    // console.log(featuredProducts)  

    return (
        <div className={styles.featuredProducts}>
            <CarouselGrid gridName={'FeaturedProducts'}
                gridData={featuredProducts}
                buttonFunction={(id) => { /*console.log("id", id);*/ setUserDetails([...userDetails,id]) }}
                buttonText='Add to cart' />
            <br />
            <div className={styles.featuredProducts}>
                <button className={styles.viewProductsButton} onClick={() => navigate('/products')} >View all products</button>
            </div>
            <br />
        </div>
    );


}