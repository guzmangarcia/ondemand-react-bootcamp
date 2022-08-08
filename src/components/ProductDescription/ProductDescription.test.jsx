import  React  from "react";
import { unmountComponentAtNode } from "react-dom";
import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import ProductDescription from './ProductDescription';
import { BrowserRouter } from 'react-router-dom';
import { CartItemsContextProvider, CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider'
import { createContext, useState, useMemo } from 'react';
let container = null;

let realUseContext;
let useContextMock;



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





it("Test Product Description elements", async () => {

  let item = { id: 1 };
  let name = 'name';
  let price = 0;
  let sku = 'sku';
  let categoryName = 'categoryName';
  let tags = ['tags'];
  let description = 'description';
  let specs = [{ spec_name: 'specs', spec_value: 'stat' }];
  let stock = 1;
  let uniqueId = 'uniqueId';

  act(() => {
    render(
      <BrowserRouter>
        <CartItemsContextProvider>
          <ProductDescription
            item={item}
            name={name}
            price={price}
            sku={sku}
            categoryName={categoryName}
            tags={tags}
            description={description}
            specs={specs}
            stock={stock}
            uniqueId={uniqueId} />
        </CartItemsContextProvider>
      </BrowserRouter>
      , container);

  });


  expect(screen.getByText('name')).toBeInTheDocument();
  expect(screen.getByText('0')).toBeInTheDocument();
  expect(screen.getByText('sku')).toBeInTheDocument();
  expect(screen.getByText('categoryName')).toBeInTheDocument();
  expect(screen.getByText('tags')).toBeInTheDocument();
  expect(screen.getByText('description')).toBeInTheDocument();
  expect(screen.getByText('specs')).toBeInTheDocument();
  expect(screen.getByDisplayValue('1')).toBeInTheDocument();
})



it("Test Product Description add to card", async () => {



  let cartItems = []

  const mockSetCartItems= jest.fn().mockImplementation(expense => {
    cartItems=1;
  
    return cartItems;
  });

  const mockUseContext = jest.fn().mockImplementation(() => ({
    cartItems: [],
    setCartItems: mockSetCartItems,
  }));

  React.useContext = mockUseContext; 


  let item = { id: 1 };
  let name = 'name';
  let price = 10;
  let sku = 'sku';
  let categoryName = 'categoryName';
  let tags = ['tags'];
  let description = 'description';
  let specs = [{ spec_name: 'specs', spec_value: 'stat' }];
  let stock = 11;
  let uniqueId = 'uniqueId';


  act(() => {
    render(
      <CartItemsContextProvider >
        <ProductDescription
          item={item}
          name={name}
          price={price}
          sku={sku}
          categoryName={categoryName}
          tags={tags}
          description={description}
          specs={specs}
          stock={stock}
          uniqueId={uniqueId} />
      </CartItemsContextProvider>
      , container);

  });

  fireEvent(
    screen.getByText('Add to cart'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(cartItems).toBe(1);
})


// it("Test Product Description controls click", async () => {

//   let currentPage = 1;
//   act(() => {
//     render(

//       <ProductDescription totalPages={5} currentPage={currentPage} setCurrentPage={(value) => { currentPage = value }} />

//       , container);
//   });
//   fireEvent(
//     screen.getByText(/>/i),
//     new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true,
//     }),
//   )
//   expect(currentPage).toBe(2);
// });

// it("Test Pagination controls click", async () => {

//   let currentPage = 1;
//   act(() => {
//     render(

//       <Pagination totalPages={5} currentPage={currentPage} setCurrentPage={(value) => { currentPage = value }} />

//       , container);
//   });
//   fireEvent(
//     screen.getByText(/</i),
//     new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true,
//     }),
//   )
//   expect(currentPage).toBe(5);
// });

// /*node --experimental-vm-modules node_modules/jest/bin/jest.js */
// /*yarn eslint .  --ext .js --ext .jsx --fix */

