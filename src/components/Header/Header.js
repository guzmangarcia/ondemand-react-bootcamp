import styles from './Header.module.scss'
import logo from '../../media/logo.png';
import shoppingCart from '../../media/shopping-cart.png';
// import styled from 'styled-components';
import React from "react";
import { useNavigate } from 'react-router-dom';




const SearchEngine = () => {

    return (

        <input className={styles.seach} />
    );

};



const Header = () => {

    const navigate = useNavigate();    


    return (

        <table className={styles.table}>
            <tbody>
                <tr>

                    <th className={styles.textHeader}>Authentic Authentic Authentic!</th>
                    <th>
                        <img src={logo} alt={'Authentic Authentic Authentic'} width={100} height={100} onClick={() => navigate('/home')} />
                    </th>
                    <th><SearchEngine /></th>
                    <th><img src={shoppingCart} alt={'check your purchase'} width={50} height={50} /></th>
                </tr>
            </tbody>
        </table>
    );

};


export default Header;