import './App.css';
//import React, { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import ProductList from './pages/ProductList/ProductList';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import {UserDetailsContextProvider} from './components/UserDetailsContextProvider/UserDetailsContextProvider.js';
import Search from './pages/Search/Search';
function App() {

  return (






    <BrowserRouter>
      <UserDetailsContextProvider>
        <Layout >
          <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/products" element={<ProductList />} />
            <Route exact path="/detail" element={<ProductDetails />} />
            <Route exact path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Layout>
      </UserDetailsContextProvider>
    </BrowserRouter>




  );
}
function NotFound() {
  return (
    <div>Not Found</div>);


}



export default App;
