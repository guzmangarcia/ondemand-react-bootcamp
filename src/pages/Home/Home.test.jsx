import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Home from './Home';
import { CartItemsContextProvider } from '../../components/CartItemsContextProvider/CartItemsContextProvider';

jest.mock('../../utils/hooks/useFeaturedBanners');
jest.mock('../../utils/hooks/useProductCategories');
jest.mock('../../utils/hooks/useFeaturedProducts');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Home Loading state', () => {
  it('Opens Home and shows Loading...', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContextProvider>
            <Home />
          </CartItemsContextProvider>
        </BrowserRouter>,
        container,
      );
    });

    expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
  });
});

describe('useFeaturedBanners testing', () => {
  it('2.1. Featured Banners Slider is fetching and rendering data from the API', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContextProvider>
            <Home />
          </CartItemsContextProvider>
        </BrowserRouter>,
        container,
      );
    });

    await waitFor(() => expect(screen.queryAllByText(/banner/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: () => {
      },
    });

    expect(screen.queryAllByText(/banner/i)[0]).toBeInTheDocument();
  }, 5000);
});

describe('useProductCategories testing', () => {
  it('Categories Carousel/Grid is fetching and rendering data from the API', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContextProvider>
            <Home />
          </CartItemsContextProvider>
        </BrowserRouter>,
        container,
      );
    });

    await waitFor(() => expect(screen.queryAllByText(/Decorate/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: () => {
      },
    });

    expect(screen.queryAllByText(/Decorate/i)[0]).toBeInTheDocument();
  }, 5000);
});

describe('useFeaturedProducts testing', () => {
  it('Featured Products Grid is fetching and rendering data from the API', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContextProvider>
            <Home />
          </CartItemsContextProvider>
        </BrowserRouter>,
        container,
      );
    });

    await waitFor(() => expect(screen.queryAllByText(/Tyler Poly Reclining Leather Armchair/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: () => {
      },
    });

    // const fs = require('fs');
    // fs.writeFileSync("./sometextfile.txt",prettyDOM() );

    expect(screen.queryAllByText(/Tyler Poly Reclining Leather Armchair/i)[0]).toBeInTheDocument();
  }, 5000);
});
