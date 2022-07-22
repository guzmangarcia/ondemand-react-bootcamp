import { createContext, useState,useMemo } from 'react';

//create a context, with createContext api
const CartItemsContext = createContext();

const CartItemsContextProvider = (props) => {
        // this state will be shared with all components 
    const [cartItems, setCartItems] = useState([]);

    const value = useMemo(() => ({cartItems, setCartItems}),[cartItems]);
     
     
         return (
             <CartItemsContext.Provider value={value}>
                 {props.children}
             </CartItemsContext.Provider>
         );
     };

export { CartItemsContext, CartItemsContextProvider };