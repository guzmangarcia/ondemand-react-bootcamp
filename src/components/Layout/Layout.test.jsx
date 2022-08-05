import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import Layout from './Layout';
import {BrowserRouter} from  'react-router-dom'
import { CartItemsContextProvider } from '../CartItemsContextProvider/CartItemsContextProvider'

let container = null;

beforeAll(() => { })

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("Test Layout alt", async () => {

  act(() => {
    render(
      <BrowserRouter>
        <CartItemsContextProvider>
          <Layout ><div>test</div></Layout>
        </CartItemsContextProvider>
      </BrowserRouter>
      , container);
  });

  expect(screen.getByText('Ecommerce created during Wizeline’s Academy React Bootcamp')).toBeInTheDocument();
  expect(screen.getByText(/Authentic Authentic Authentic/i)).toBeInTheDocument();
  expect( screen.queryByPlaceholderText(/Find your product.../i)).toBeInTheDocument();
  expect( screen.getByAltText(/check your purchase/i)).toBeInTheDocument();

});


/*node --experimental-vm-modules node_modules/jest/bin/jest.js */
/*yarn eslint .  --ext .js --ext .jsx --fix */