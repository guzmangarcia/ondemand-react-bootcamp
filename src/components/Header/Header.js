import styles from './Header.module.scss'
import logo from '../../media/logo.png';
import shoppingCart from '../../media/shopping-cart.png';
// import styled from 'styled-components';
import React from "react";
import { useNavigate } from 'react-router-dom';




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



const Header = () => {

    const navigate = useNavigate();


    return (

        <>
            <div className={styles.header}>
                <div className={styles.divwithborder}>
                    <th className={styles.textHeader}>Authentic Authentic Authentic!</th>
                </div>
                <div className={styles.divwithborder}>
                    <img src={logo} alt={'Authentic Authentic Authentic'} className={styles.logo} onClick={() => navigate('/home')} />
                </div>
                <div className={styles.divwithborder}>
                    <SearchEngine />
                </div>
                <div className={styles.divwithborder}>
                    <img src={shoppingCart} alt={'check your purchase'} className={styles.shoppingcart} onClick={() => navigate('/cart')} />
                </div>
            </div>
        </>
    );

};


export default Header;