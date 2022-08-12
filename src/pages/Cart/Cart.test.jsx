import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Cart from './Cart';
import { CartItemsContext, CartItemsContextProvider } from '../../components/CartItemsContextProvider/CartItemsContextProvider';
import useProductsMock from '../../mocks/en-us/products.json';
import useProductsMock2 from '../../mocks/en-us/products-page-2.json';

const useProducts = require('../../utils/hooks/useProducts');

jest.mock('../../utils/hooks/useProducts');
jest.mock('../../utils/hooks/useProductCategories');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  useProducts.mockImplementation(() => ({ data: useProductsMock, isLoading: false }));
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// - 6.1. Validate that an empty state is displayed when there are no items in the cart.
// - 6.2. Validate that the list of products is shown when there are items in the cart.
// Each row should contain the main image of the product, its name,
// unit price, a quantity selector, subtotal and a “remove from cart icon”.
// - 6.3. Validate that the cart total label displays
// the sum of the subtotals of all items in the cart.
// - 6.4. Validate that you can update the quantity of items for a particular product
// in the cart. Don’t forget to validate that you don’t
// exceed the stock units available for the selected product.
// - 6.5. Validate that you can remove a product from the
// cart after clicking on the “remove from cart icon”.

describe('Cart Loading state', () => {
  it('Opens Cart and shows Loading...', async () => {
    useProducts.mockImplementation(() => ({ data: [], isLoading: false }));

    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContextProvider>
            <Cart />
          </CartItemsContextProvider>
        </BrowserRouter>,
        container,
      );
    });

    expect(screen.getAllByText('No items found')[0]).toBeInTheDocument();
  });
});

describe('products testing', () => {
  it('Opens Cart and adds the product to the card', async () => {
    let cartItems = [];
    const mockSetCartItems = ((element) => {
      cartItems = cartItems.push(element);

      return cartItems;
    });

    const mockUseContext = {
      cartItems: [],
      setCartItems: mockSetCartItems,
    };

    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContext.Provider value={mockUseContext}>
            <Cart />
          </CartItemsContext.Provider>
        </BrowserRouter>,
        container,
      );
    });

    await waitFor(
      () => expect(screen.findByText('1080681271')).toBeInTheDocument(),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );

    fireEvent(
      screen.getByText('Add to cart'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );
    expect(cartItems).toBe(1);

    // const fs = require('fs');
    // fs.writeFileSync("./sometextfile.txt",prettyDOM() );
    expect(screen.queryAllByText(/Tallulah Sofa Gray/i)[0]).toBeInTheDocument();

    expect(screen.queryByText(/Name/i)).toBeInTheDocument();
    expect(screen.queryByText(/Price/i)).toBeInTheDocument();
    expect(screen.queryByText(/SKU/i)).toBeInTheDocument();
    expect(screen.queryByText(/Category/i)).toBeInTheDocument();
    expect(screen.queryByText(/Tags/i)).toBeInTheDocument();
    expect(screen.queryByText(/Description/i)).toBeInTheDocument();
    expect(screen.queryByText(/Qty/i)).toBeInTheDocument();
    expect(screen.queryByText(/Specs/i)).toBeInTheDocument();
  }, 5000);

  it('Validate that the “Add to Cart” button is disabled when the stock units available for the selected product is zero.', async () => {
    useProducts.mockImplementation(() => ({ data: useProductsMock2, isLoading: false }));
    let cartItems = [];
    const mockSetCartItems = ((element) => {
      cartItems = cartItems.push(element);

      return cartItems;
    });

    const mockUseContext = {
      cartItems: [],
      setCartItems: mockSetCartItems,
    };

    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContext.Provider value={mockUseContext}>
            <Cart />
          </CartItemsContext.Provider>
        </BrowserRouter>,
        container,
      );
    });

    await waitFor(
      () => expect(screen.findByText('Add to cart')).toBeInTheDocument(),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );

    screen.debug();

    expect(screen.getByText('Add to cart')).toHaveAttribute('disabled');
  }, 5000);
});
