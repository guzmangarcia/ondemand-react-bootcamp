import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor, waitForElementToBeRemoved, queryByText, queryAllByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import Home from './Home';
import Layout from "../../components/Layout/Layout";
import CartItemsContextProvider from '../../components/CartItemsContextProvider/CartItemsContextProvider'
import useFeaturedProducts from '../../utils/hooks/useFeaturedProducts';


let container = null;



beforeAll(() => { })

beforeEach(() => {
  // jest.mock('react-router-dom', () => ({
  //   ...jest.requireActual('react-router-dom'),
  //   useNavigate: () => (jest.fn())
  // }));
  // jest.mock('react', () => ({
  //   ...jest.requireActual('react'),
  //   useContext: () => (jest.fn())
  // }));
  // setup a DOM element as a render target
  container = document.createElement("div");

  document.body.appendChild(container);




});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("Opens Home", async () => {

  act(() => {
    render(<BrowserRouter><Home /></BrowserRouter>, container);
  });

  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
});



it("Opens Home and waits to load", async () => {


  jest.mock('../../utils/hooks/useFeaturedProducts', () => {
    jest.fn().mockImplementation(() => {

      return { productsData: [], isLoading: false };
    });
  });



  await act(async () => {
    render(<BrowserRouter><Home /></BrowserRouter>, container);
  });

  // let result = await waitForElementToBeRemoved(() => {

  //   let query = queryAllByText('Loading...');
  //   if (query?.length > 0) return query[0];
  //   return null;
  // }, { timeout: 4000 })
  // .catch(//err =>
  // //  console.log(err),
  // )
  // console.log(screen.debug());


  expect(screen.getAllByText(/Loading.../i)[0]).toBeInTheDocument();
}, 5000);
