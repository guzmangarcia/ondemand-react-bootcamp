import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FeaturedProducts.module.scss';
import CarouselGrid from '../CarouselGrid/CarouselGrid';

import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider';

export default function FeaturedProducts(props) {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartItemsContext);

  const featuredProducts = props.featuredProducts.map((data) => data.srcs.map((image, index) => ({
    id: index + 1,
    src: image.image.url,
    alt: data.alt,
    text: data.text,
    navigationLink: data.navigationLink,
    uniqueId: data.uniqueId,
    stock: data.stock,
    name: data.name,
    price: data.price,
  })));

  function addItemToCard(item) {
    let totalElements = 1;
    let elements = cartItems;
    let cartItem = cartItems.find((cartItem) => cartItem.uniqueId === item.uniqueId);
    if (cartItem !== undefined) {
      totalElements += cartItem.quantity;
      elements = cartItems.filter((cartItem) => cartItem.uniqueId !== item.uniqueId);
    } else {
      cartItem = {
        uniqueId: item.uniqueId,
        quantity: 0,
        item,
      };
    }
    if (totalElements > item.stock) {
      setTimeout(() => {
        alert('not enough stock');
      }, 100);
      return;
    }
    cartItem.quantity = totalElements;

    setCartItems([...elements, cartItem]);
  }

  return (
    <div className={styles.featuredProducts}>
      <CarouselGrid
        gridName="FeaturedProducts"
        gridData={featuredProducts}
        buttonFunction={(item) => { addItemToCard(item); }}
        buttonText="Add to cart"
        showButton={(item) => item[0].stock > 0}
      />
      <br />
      <div className={styles.featuredProducts}>
        <button type="button" className={styles.viewProductsButton} onClick={() => navigate('/products')}>View all products</button>
      </div>
      <br />
    </div>
  );
}
