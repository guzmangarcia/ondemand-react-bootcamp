import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';
import { CartItemsContextProvider } from '../CartItemsContextProvider/CartItemsContextProvider';

let container = null;

beforeAll(() => { });

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Test FeaturedProducts Loading', async () => {
  act(() => {
    render(
      <BrowserRouter>
        <CartItemsContextProvider>
          <FeaturedProducts />
        </CartItemsContextProvider>
      </BrowserRouter>,
      container,
    );
  });

  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
});

it('Test FeaturedProducts 0 Elements', async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <CartItemsContextProvider>
          <FeaturedProducts featuredProducts={[]} />
        </CartItemsContextProvider>
      </BrowserRouter>,
      container,
    );
  });

  expect(screen.queryByText(/No elements found/i)).toBeInTheDocument();
}, 5000);

it('test FeaturedProducts with 2 elements', async () => {
  const product = [
    {
      id: 1,
      srcs: [{ image: { url: 'src1' } }, { image: { url: 'src2' } }],
      alt: 'ALT 1',
      text: ['row.data.name', 'row.data.price€', 'row.data.category.slug'],
      navigationLink: '/detail?productId=row.id',
      uniqueId: 'row.id.1',
      stock: 1,
      name: 'row.data.name',
      price: 2,
    },
    {
      id: 3,
      srcs: [{ image: { url: 'src3' } }, { image: { url: 'src4' } }],
      alt: 'ALT 2',
      text: ['row.data.name', 'row.data.price€', 'row.data.category.slug'],
      navigationLink: '/detail?productId=row.id',
      uniqueId: 'row.id.2',
      stock: 4,
      name: 'row.data.name',
      price: 5,
    },
  ];
  await act(async () => {
    render(
      <BrowserRouter>
        <CartItemsContextProvider>
          <FeaturedProducts featuredProducts={product} />
        </CartItemsContextProvider>
      </BrowserRouter>,
      container,
    );
  });

  expect(screen.getAllByText('row.data.name')[0]).toBeInTheDocument();
  expect(screen.getAllByText('row.data.price€')[0]).toBeInTheDocument();
  expect(screen.getAllByText('row.data.category.slug')[0]).toBeInTheDocument();
  expect(screen.getAllByAltText('ALT 1')[0].src).toContain('src1');
});

/* node --experimental-vm-modules node_modules/jest/bin/jest.js */
/* yarn eslint .  --ext .js --ext .jsx --fix */
