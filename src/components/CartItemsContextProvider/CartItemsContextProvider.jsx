import PropTypes from 'prop-types';
import { createContext, useState, useMemo } from 'react';

// create a context, with createContext api
const CartItemsContext = createContext();

function CartItemsContextProvider({ children }) {
  // this state will be shared with all components
  const [cartItems, setCartItems] = useState([]);

  const value = useMemo(() => ({ cartItems, setCartItems }), [cartItems]);

  return (
    <CartItemsContext.Provider value={value}>
      {children}
    </CartItemsContext.Provider>
  );
}

export { CartItemsContext, CartItemsContextProvider };

CartItemsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
