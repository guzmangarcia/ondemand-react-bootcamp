import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
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

it('Test ShoppingCart alt', async () => {
  act(() => {
    render(
      <BrowserRouter>
        <CartItemsContextProvider>
          <ShoppingCart />
        </CartItemsContextProvider>
      </BrowserRouter>,
      container,
    );
  });

  expect(screen.getByAltText(/check your purchase/i)).toBeInTheDocument();
});

/* node --experimental-vm-modules node_modules/jest/bin/jest.js */
/* yarn eslint .  --ext .js --ext .jsx --fix */
