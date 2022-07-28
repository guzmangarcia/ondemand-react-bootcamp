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
            <label htmlFor={name}>
              Name:
              <input defaultValue={name} onChange={(e) => setName(e.currentTarget.value)} />
            </label>
          </div>
          <div className={styles.input}>
            <label htmlFor={email}>
              Email:
              <input defaultValue={email} type="text" onChange={(e) => setEmail(e.currentTarget.value)} />
            </label>
          </div>
          <div className={styles.input}>

            <label htmlFor={zipCode}>
              Zip Code:

              <input id={zipCode} type="text" defaultValue={zipCode} onChange={(e) => setZipCode(e.currentTarget.value)} />
            </label>
          </div>
          <div className={styles.input}>

            <label htmlFor={orderNotes}>
              Order Notes:

              <textarea
                htmlFor={orderNotes}
                defaultValue={orderNotes}
                onChange={(e) => setOrderNotes(e.currentTarget.value)}
              />
            </label>
          </div>
        </div>

        {cartItems.length > 0 ? <Grid data={cartItems} setData={setCartItems} editable={false} />
          : <p>No items found</p>}
      </form>
    </>
  );
}
