import './Layout.scss';
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'



export default function Layout({ children }) {
    return (
        <div className="App">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}