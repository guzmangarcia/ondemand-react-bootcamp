import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../media/logo.png';
import shoppingCart from '../../media/shopping-cart.png';
import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider'



const SearchEngine = () => {

  const navigate = useNavigate();

  return (

    <input className={styles.search} placeholder="Find your product..." onChange={(e) => {
      if (e.target.value === '') {
        navigate(`/home`)
      } else {
        navigate(`/search?q=${e.target.value}`)
      }
    }} />
  );

};

const ShoppingCart = () => {

  const navigate = useNavigate();
  const { cartItems } = useContext(CartItemsContext);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    let tempTotalItems = 0;
    cartItems.forEach((e) => { tempTotalItems += e.quantity })
    setTotalItems(tempTotalItems);

  },
    [cartItems]
  )


  return (
    <>
      <img src={shoppingCart} alt={'check your purchase'} className={styles.shoppingcart} onClick={() => navigate('/cart')} />
      {(totalItems > 0) && <label><b>({totalItems})</b></label>}
    </>
  );
}


const Header = () => {

  const navigate = useNavigate();


  return (

    <>
      <div className={styles.header}>
        <div className={styles.divwithborder}>
          <p className={styles.textHeader}>Authentic Authentic Authentic!</p>
        </div>
        <div className={styles.divwithborder}>
          <img src={logo} alt={'Authentic Authentic Authentic'} className={styles.logo} onClick={() => navigate('/home')} />
        </div>
        <div className={styles.divwithborder}>
          <SearchEngine />
        </div>
        <div className={styles.divwithborder}>
          <ShoppingCart />
        </div>
      </div>
    </>
  );

};


export default Header;