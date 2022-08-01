import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './FeaturedProducts.module.scss';
import CarouselGrid from '../CarouselGrid/CarouselGrid';
import ShowError from '../ShowError/ShowError';

import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider';

export default function FeaturedProducts({ featuredProducts }) {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [message, setMessage] = useState('');

  const featuredProductsMapped = featuredProducts.map((data) => data.srcs.map((image, index) => ({
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
    let cartItem = cartItems.find((itemToFind) => itemToFind.uniqueId === item.uniqueId);
    if (cartItem !== undefined) {
      totalElements += cartItem.quantity;
      elements = cartItems.filter((itemToModify) => itemToModify.uniqueId !== item.uniqueId);
    } else {
      cartItem = {
        uniqueId: item.uniqueId,
        quantity: 0,
        item,
      };
    }
    if (totalElements > item.stock) {
      setTimeout(() => {
        setMessage('not enough stock');
      }, 100);
      return;
    }
    cartItem.quantity = totalElements;

    setCartItems([...elements, cartItem]);
  }

  return (
    <div className={styles.featuredProducts}>
      <ShowError message={message} setMessage={setMessage} />
      <CarouselGrid
        gridName="FeaturedProducts"
        gridData={featuredProductsMapped}
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

FeaturedProducts.propTypes = {

  featuredProducts: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    src: PropTypes.string,
    alt: PropTypes.string,
    text: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ])),
    navigationLink: PropTypes.string,
    uniqueId: PropTypes.string,
    stock: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  })),
};
FeaturedProducts.defaultProps = {
  featuredProducts: [{
    id: 1,
    src: '',
    alt: '',
    text: [],
    navigationLink: '',
    uniqueId: '',
    stock: 0,
    name: '',
    price: 0,

  }],

};
