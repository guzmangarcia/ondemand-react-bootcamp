import { useContext, useState } from 'react';
import { CartItemsContext } from '../../components/CartItemsContextProvider/CartItemsContextProvider';
import Grid from '../../components/Grid/Grid';

import styles from './Checkout.module.scss';

export default function Checkout() {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [orderNotes, setOrderNotes] = useState('');

  return (
    <>
      <h1> Checkout</h1>
      <form>
        <div className={styles.forminputs}>
          <div className={styles.input}>
            {' '}
            <label htmlFor={name}>Name:</label>
            <input onChange={(e) => setName(e.currentTarget.value)} />
          </div>
          <div className={styles.input}>
            <label htmlFor={email}>Email:</label>
            <input onChange={(e) => setEmail(e.currentTarget.value)} />
          </div>
          <div className={styles.input}>
            {' '}
            <label htmlFor={zipCode}>Zip Code:</label>
            {' '}
            <input onChange={(e) => setZipCode(e.currentTarget.value)} />
          </div>
          <div className={styles.input}>
            {' '}
            <label htmlFor={orderNotes}>Order Notes:</label>
            {' '}
            <textarea onChange={(e) => setOrderNotes(e.currentTarget.value)} />
          </div>
        </div>

        {cartItems.length > 0 ? <Grid data={cartItems} setData={setCartItems} editable={false} /> : <p>No items found</p>}
      </form>
    </>
  );
}
