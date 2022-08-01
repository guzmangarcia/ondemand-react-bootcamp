import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import Home from './Home';
import Layout from "../../components/Layout/Layout";
import CartItemsContextProvider from '../../components/CartItemsContextProvider/CartItemsContextProvider'

let container = null;
beforeEach(() => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
  }));
  jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => (jest.fn())
  }));
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
  // act(() => {
  //   render(<BrowserRouter><Home /></BrowserRouter>  , container);
  // });

   //expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();


  // await waitFor(() => expect(screen.getByText('banner products!'), 5000).toBeInTheDocument());
});