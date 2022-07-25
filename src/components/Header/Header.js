import styles from './Header.module.scss'
import logo from '../../media/logo.png';
import shoppingCart from '../../media/shopping-cart.png';
// import styled from 'styled-components';





const SearchEngine = () => {

    return (

        <input className={styles.seach} />
    );

};



const Header = () => {

    return (

        <table className={styles.table}>
            <tbody>
                <tr>

                    <th>Authentic Authentic Authentic!</th>
                    <th><img src={logo} alt={'Authentic Authentic Authentic'} width={100} height={100} /></th>
                    <th><SearchEngine /></th>
                    <th><img src={shoppingCart} alt={'check your purchase'} width={50} height={50} /></th>
                </tr>
            </tbody>
        </table>
    );

};


export default Header;