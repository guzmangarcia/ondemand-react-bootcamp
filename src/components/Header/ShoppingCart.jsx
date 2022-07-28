import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import shoppingCart from '../../media/shopping-cart.png';
import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider';

export function ShoppingCart() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartItemsContext);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(
    () => {
      let tempTotalItems = 0;
      cartItems.forEach((e) => { tempTotalItems += e.quantity; });
      setTotalItems(tempTotalItems);
    },
    [cartItems],
  );

  return (
    <>
      <img src={shoppingCart} alt="check your purchase" className={styles.shoppingcart} onClick={() => navigate('/cart')} />
      {(totalItems > 0) && (
      <label>
        <b>
          (
          {totalItems}
          )
        </b>
      </label>
      )}
    </>
  );
}
