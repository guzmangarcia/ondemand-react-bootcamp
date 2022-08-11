import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import SearchEngine from './SearchEngine';
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

it('Test SearchEngine text', async () => {
  act(() => {
    render(
      <BrowserRouter>
        <CartItemsContextProvider>
          <SearchEngine />
        </CartItemsContextProvider>
      </BrowserRouter>,
      container,
    );
  });

  expect(screen.getByRole('textbox', { placeholder: /Find your product.../i })).toBeInTheDocument();
});

/* node --experimental-vm-modules node_modules/jest/bin/jest.js */
/* yarn eslint .  --ext .js --ext .jsx --fix */
