import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import { CartItemsContextProvider } from './components/CartItemsContextProvider/CartItemsContextProvider';
import Search from './pages/Search/Search';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Test from './pages/Test/Test';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <CartItemsContextProvider>
        <Layout>
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/detail" element={<ProductDetails />} />
            <Route exact path="/search" element={<Search />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/test" element={<Test />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Layout>
      </CartItemsContextProvider>
    </BrowserRouter>
  );
}
function NotFound() {
  return (<div>Not Found</div>);
}

export default App;
