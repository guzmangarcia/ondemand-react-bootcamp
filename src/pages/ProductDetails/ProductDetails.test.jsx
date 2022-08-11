import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  render, screen, waitFor, waitForElementToBeRemoved, queryByText, queryAllByText, fireEvent, renderHook, prettyDOM,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import ProductDetails from './ProductDetails';
import { CartItemsContextProvider } from '../../components/CartItemsContextProvider/CartItemsContextProvider';
import useProductsMock from '../../mocks/en-us/products.json';
import useProductsMockPage2 from '../../mocks/en-us/products-page-2.json';

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

describe('ProductDetails Loading state', () => {
  it('Opens ProductDetails and shows Loading...', async () => {
    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <ProductDetails />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
    expect(screen.getAllByText('This is the Product List Page')[0]).toBeInTheDocument();
  });
});

describe('products testing', () => {
  it('Opens ProductDetails and waits  products to load', async () => {
    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <ProductDetails />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    await waitFor(() => expect(screen.queryAllByText(/Tallulah Sofa Gray/i)[0]).toBeInTheDocument(), {
      timeout: 2000,
      interval: 50,
      onTimeout: (e) => {
        console.log('timeout');
      },
    });

    // const fs = require('fs');
    // fs.writeFileSync("./sometextfile.txt",prettyDOM() );
    expect(screen.queryAllByText(/Tallulah Sofa Gray/i)[0]).toBeInTheDocument();
  }, 5000);
});

describe('products testing', () => {
  it('Opens ProductDetails and waits  the sidebar to load', async () => {
    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <ProductDetails />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    await waitFor(() => expect(screen.queryAllByText(/Bath/i)[0]).toBeInTheDocument(), {
      timeout: 2000,
      interval: 50,
      onTimeout: (e) => {
      },
    });

    // const fs = require('fs');
    // fs.writeFileSync("./sometextfile.txt",prettyDOM() );
    expect(screen.queryAllByText(/Bath/i)[0]).toBeInTheDocument();
  }, 5000);
});

describe('products testing', () => {
  it('Opens ProductDetails clicks on next', async () => {
    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <ProductDetails />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    await waitFor(() => expect(screen.queryAllByText('2')[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: (e) => {

      },
    });

    useProducts.mockImplementation(() => ({ data: useProductsMockPage2, isLoading: false }));

    await fireEvent(
      screen.getByText('2'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    const submitButtons = screen.queryAllByText('not found');
    expect(submitButtons).toHaveLength(8);
  }, 7000);
});
