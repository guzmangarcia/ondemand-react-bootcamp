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

const useProducts = require('../../utils/hooks/useProducts');

jest.mock('../../utils/hooks/useProducts');

let cardComplete;
let cartItems = [];
let mockSetCartItems;

let mockUseContext;
let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  cartItems = [];
  cardComplete = [
    {
      uniqueId: 'YZZ6OhIAACgAvlE1',
      quantity: 1,
      item: {
        id: 1,
        src: 'https://images.prismic.io/wizeline-academy/267ca459-c37b-4187-a59e-9e7c55e0b09a_1.webp?auto=compress,format',
        alt: 'Desk Lamp Ezra',
        text: [
          'Desk Lamp Ezra',
          '147€',
          'lighting',
        ],
        navigationLink: '/detail?productId=YZZ6OhIAACgAvlE1',
        uniqueId: 'YZZ6OhIAACgAvlE1',
        stock: 5,
        name: 'Desk Lamp Ezra',
        price: 147,
      },
    },
    {
      uniqueId: 'YZZ_XhIAAC0AvmiA',
      quantity: 4,
      item: {
        id: 1,
        src: 'https://images.prismic.io/wizeline-academy/1c8883ca-2797-4138-a7e5-a7d2ae583192_1.jpeg?auto=compress,format',
        alt: 'Fair Isle Snowflake Lumbar Cushion Cover',
        text: [
          'Fair Isle Snowflake Lumbar Cushion Cover',
          '40€',
          'decorate',
        ],
        navigationLink: '/detail?productId=YZZ_XhIAAC0AvmiA',
        uniqueId: 'YZZ_XhIAAC0AvmiA',
        stock: 5,
        name: 'Fair Isle Snowflake Lumbar Cushion Cover',
        price: 40,
      },
    },
  ];

  mockSetCartItems = ((element) => {
    cartItems = element;

    return cartItems;
  });

  mockUseContext = {
    cartItems: cardComplete,
    setCartItems: mockSetCartItems,
  };
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
  it('Validate that an empty state is displayed when there are no items in the cart.', async () => {
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
  it('Validate that the list of products is shown when there are items in the cart. Each row should contain the main image of the product, its name,unit price, a quantity selector, subtotal and a “remove from cart icon”.', async () => {
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
      () => expect(screen.findByText('Product')).toBeInTheDocument(),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );

    expect(screen.queryByText(/Product/i)).toBeInTheDocument();
    expect(screen.queryByText(/Quantity/i)).toBeInTheDocument();
    expect(screen.queryByText(/Image/i)).toBeInTheDocument();
    expect(screen.queryByText(/Price\/Unit/i)).toBeInTheDocument();
    expect(screen.queryByText(/Subtotal/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/X/i)[0]).toBeInTheDocument();
    expect(screen.queryByText(/Proceed to checkout/i)).toBeInTheDocument();
    expect(screen.queryByText(/Total price/i)).toBeInTheDocument();
  }, 5000);

  it('Validate that the cart total label displays the sum of the subtotals of all items in the cart.', async () => {
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
      () => expect(screen.findByText('Product')).toBeInTheDocument(),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );
    expect(screen.queryAllByText(/Desk Lamp Ezra/i)[0]).toBeInTheDocument();
    expect(screen.queryAllByText(/147\$/i)).toHaveLength(2);
    expect(screen.queryAllByText(/160\$/i)).toHaveLength(1);
    expect(screen.queryAllByText(/307\$/i)).toHaveLength(1);
  }, 5000);

  it('Validate that you can update the quantity of items for a particular product in the cart. Don’t forget to validate that you don’t exceed the stock units available for the selected product.', async () => {
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
      () => expect(screen.findByText('Product')).toBeInTheDocument(),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );
    expect(screen.queryAllByText(/Desk Lamp Ezra/i)[0]).toBeInTheDocument();
    expect(screen.queryAllByText(/147\$/i)).toHaveLength(2);
    expect(screen.queryAllByText(/160\$/i)).toHaveLength(1);
    expect(screen.queryAllByText(/307\$/i)).toHaveLength(1);

    fireEvent.change(screen.getByTestId('select-YZZ6OhIAACgAvlE1'), { target: { value: 2 } });

    mockUseContext = {
      cartItems,
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
      () => expect(screen.findByText(/294\$/i)).toHaveLength(1),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );

    expect(screen.queryAllByText(/147\$/i)).toHaveLength(3);
    expect(screen.queryAllByText(/294\$/i)).toHaveLength(1);
    expect(screen.queryAllByText(/454\$/i)).toHaveLength(1);
  }, 5000);

  it('6.5. Validate that you can remove a product from the cart after clicking on the “remove from cart icon”..', async () => {
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
      () => expect(screen.findByText('Product')).toBeInTheDocument(),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );
    expect(screen.queryAllByText(/Desk Lamp Ezra/i)[0]).toBeInTheDocument();
    expect(screen.queryAllByText(/147\$/i)).toHaveLength(2);
    expect(screen.queryAllByText(/160\$/i)).toHaveLength(1);
    expect(screen.queryAllByText(/307\$/i)).toHaveLength(1);

    fireEvent.click(screen.getByTestId('button-YZZ6OhIAACgAvlE1'));

    mockUseContext = {
      cartItems,
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
      () => expect(screen.findByText(/160\$/i)).toHaveLength(1),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );

    expect(screen.queryAllByText(/40\$/i)).toHaveLength(2);
    expect(screen.queryAllByText(/160\$/i)).toHaveLength(3);
  }, 5000);
});
