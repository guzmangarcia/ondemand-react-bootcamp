import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor, waitForElementToBeRemoved, queryByText, queryAllByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import Home from './Slider';
import Layout from "../../components/Layout/Layout";
import CartItemsContextProvider from '../../components/CartItemsContextProvider/CartItemsContextProvider'
import useFeaturedProducts from '../../utils/hooks/useFeaturedProducts';
import Slider from './Slider';


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


it("Test Slider Loading", async () => {

  act(() => {
    render(<Slider />, container);
  });

  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
});



it("Test Slider 0 Elements", async () => {


  jest.mock('../../utils/hooks/useFeaturedProducts', () => {
    jest.fn().mockImplementation(() => {

      return { productsData: [], isLoading: false };
    });
  });



  await act(async () => {
    render(<Slider elements={[] }/>, container);
  });

 expect(screen.queryByText(/No elements found/i)).toBeInTheDocument();
}, 5000);


/*node --experimental-vm-modules node_modules/jest/bin/jest.js */