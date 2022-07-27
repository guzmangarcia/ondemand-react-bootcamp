
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import styles from './Layout.module.scss'


export default function Layout({ children }) {
    return (
        <div className="App">
            <Header />
            <div className={styles.margin}>{children}</div>
            <Footer />
          
        </div>
    );
}