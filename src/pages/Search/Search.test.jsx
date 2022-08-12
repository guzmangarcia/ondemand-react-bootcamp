import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Layout from '../../components/Layout/Layout';
import Home from '../Home/Home';
import Search from './Search';
import { CartItemsContextProvider } from '../../components/CartItemsContextProvider/CartItemsContextProvider';
// - 5.1. Validate that the list of results is r
// endering data according to the “searchTerm” provided.
// - 5.2. Validate that an empty state is
// displayed when there are no results for the “searchTerm” provided.

jest.mock('../../utils/hooks/useFeaturedBanners');
jest.mock('../../utils/hooks/useProductCategories');
jest.mock('../../utils/hooks/useFeaturedProducts');
jest.mock('../../utils/hooks/useSearch');

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



describe('Search Loading state', () => {
  it('5.1. Validate that the list of results is rendering data according to the “searchTerm” provided.', async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <CartItemsContextProvider>
            <Layout>
              <Routes>

                <Route exact path="/" element={<Home />} />

                <Route exact path="/search" element={<Search />} />

              </Routes>

            </Layout>
          </CartItemsContextProvider>
        </BrowserRouter>,
        container,
      );
    });
    expect(screen.getAllByText(/Loading/i)[0]).toBeInTheDocument();
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'sofa' } });

    await waitFor(
      () => expect(screen.findByText(/PB Comfort Roll Arm/i)).toBeInTheDocument(),
      {
        timeout: 1000,
        interval: 50,
        onTimeout: () => {
        },
      },
    );
    expect(screen.getAllByText(/PB Comfort Roll Arm/i)[0]).toBeInTheDocument();
  });
});
