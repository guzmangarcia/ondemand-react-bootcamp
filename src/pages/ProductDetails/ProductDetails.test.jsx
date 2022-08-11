import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen, waitFor, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import ProductDetails from './ProductDetails';
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

// - 4.1. Product Detail Page is fetching and rendering data from the API for a particular product.
// - 4.2. Product Detail Page contains the following labels: name of the
// selected product, current price, SKU, category name, a list of tags, and description.
// - 4.3. Product Detail Page contains a quantity selector and an “Add to Cart” button.
// - 4.4. Validate that after clicking on the “Add to Cart” button, the number of
// items that are selected in quantity selector control are added to the cart.
// - 4.5. Validate that the “Add to Cart” button is disabled
// when the stock units available for the selected product is zero.

describe('ProductDetails Loading state', () => {
  it('Opens ProductDetails and shows Loading...', async () => {
    useProducts.mockImplementation(() => ({ data: [], isLoading: false }));

    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContextProvider>
            <ProductDetails />
          </CartItemsContextProvider>
        </BrowserRouter>,
        container,
      );
    });

    expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
  });
});

describe('products testing', () => {
  it('Opens ProductDetails and adds the product to the card', async () => {
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
            <ProductDetails />
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
            <ProductDetails />
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
