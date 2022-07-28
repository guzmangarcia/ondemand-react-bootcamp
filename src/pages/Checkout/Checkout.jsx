import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItemsContext } from '../../components/CartItemsContextProvider/CartItemsContextProvider';
import Grid from '../../components/Grid/Grid';

import styles from './Checkout.module.scss';

export default function Checkout() {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const navigate = useNavigate();

  return (
    <>
      <h1> Checkout</h1>
      <form>
        <div className={styles.forminputs}>
          <div className={styles.input}>
            {' '}
            <label>Name:</label>
            <input />
          </div>
          <div className={styles.input}>
            <label>Email:</label>
            <input />
          </div>
          <div className={styles.input}>
            {' '}
            <label>Zip Code:</label>
            {' '}
            <input />
          </div>
          <div className={styles.input}>
            {' '}
            <label>Order Notes:</label>
            {' '}
            <textarea />
          </div>
        </div>

        {cartItems.length > 0 ? <Grid data={cartItems} setData={setCartItems} editable={false} /> : <p>No items found</p>}
      </form>
    </>
  );
}
