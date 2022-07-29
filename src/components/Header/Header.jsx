import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../media/logo.png';
import SearchEngine from './SearchEngine';
import ShoppingCart from './ShoppingCart';

function Header() {
  const navigate = useNavigate();

  return (

    <div>
      <div className={styles.header}>
        <div className={styles.divwithborder}>
          <p className={styles.textHeader}>Authentic Authentic Authentic!</p>
        </div>
        <div className={styles.divwithborder}>
          <img src={logo} alt="Authentic Authentic Authentic" className={styles.logo} onClick={() => navigate('/home')} />
        </div>
        <div className={styles.divwithborder}>
          <SearchEngine />
        </div>
        <div className={styles.divwithborder}>
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Header;
