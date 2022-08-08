import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor, waitForElementToBeRemoved, queryByText, queryAllByText, fireEvent, renderHook } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import Home from './Home';
import Layout from "../../components/Layout/Layout";
import { CartItemsContextProvider } from '../../components/CartItemsContextProvider/CartItemsContextProvider'
// import useFeaturedBanners from '../../utils/hooks-mooks/useFeaturedBanners'
import * as hookBanners from '../../utils/hooks/useFeaturedBanners';
// import * as hookProducts from '../../utils/hooks/useFeaturedProducts';
// import * as hookCategories from '../../utils/hooks/useProductCategories';

let container = null;


describe('add', () => {
  beforeAll(() => { })

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    jest.resetModules();
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });



  jest.mock('../../utils/hooks/useFeaturedBanners', () => {
    return () => ({ data: [], isLoading: true });
  });

  jest.mock('../../utils/hooks/useFeaturedProducts', () => {
    return () => ({ data: [], isLoading: true });
  });

  jest.mock('../../utils/hooks/useProductCategories', () => {
    return () => ({ data: [], isLoading: true });
  });



  it("Opens Home", async () => {

    act(() => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <Home />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
  });




});

describe('working', () => {

  beforeAll(() => { })

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    jest.resetModules();
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  jest.mock('../../utils/hooks/useFeaturedBanners', () => {
    const originalModule = jest.requireActual('../../utils/hooks-mooks/useFeaturedBanners');
    return originalModule;
  });

  jest.mock('../../utils/hooks/useFeaturedProducts', () => {
    const originalModule = jest.requireActual('../../utils/hooks-mooks/useFeaturedProducts');
    return originalModule;
  });

  jest.mock('../../utils/hooks/useProductCategories', () => {
    const originalModule = jest.requireActual('../../utils/hooks-mooks/useProductCategories');
    return originalModule;
  });
  it("Opens Home and waits to load", async () => {



    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <Home />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    await waitFor(() => expect(screen.getAllByText(/banner/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: (e) => {
      },
    })


    expect(screen.getAllByText(/banner/i)[0]).toBeInTheDocument()
  }, 15000);
});
