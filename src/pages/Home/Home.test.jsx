import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor, waitForElementToBeRemoved, queryByText, queryAllByText, fireEvent, renderHook, prettyDOM} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import Home from './Home';
import { CartItemsContextProvider } from '../../components/CartItemsContextProvider/CartItemsContextProvider'

jest.mock('../../utils/hooks/useFeaturedBanners');
jest.mock('../../utils/hooks/useProductCategories');
jest.mock('../../utils/hooks/useFeaturedProducts');



let container = null;
beforeEach(() => {

  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
;
  unmountComponentAtNode(container);
  container.remove();
  container = null;

});

describe('Home Loading state', () => {


  it("Opens Home and shows Loading...", async () => {

       await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <Home />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
  });


});

describe('useFeaturedBanners testing', () => {

  it("Opens Home and waits  useFeaturedBanners to load", async () => {



       await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <Home />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    await waitFor(() => expect(screen.queryAllByText(/banner/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: (e) => {
      },
    })

    expect(screen.queryAllByText(/banner/i)[0]).toBeInTheDocument()
  }, 5000);
});


describe('useProductCategories testing', () => {


  it("Opens Home and waits useProductCategories to load", async () => {

    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <Home />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    await waitFor(() => expect(screen.queryAllByText(/Decorate/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: (e) => {
      },
    })

    expect(screen.queryAllByText(/Decorate/i)[0]).toBeInTheDocument()
  }, 5000);
});




describe('useFeaturedProducts testing', () => {

  it("Opens Home and waits useFeaturedProducts to load", async () => {

    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <Home />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });


    await waitFor(() => expect(screen.queryAllByText(/Tyler Poly Reclining Leather Armchair/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: (e) => {
      },
    })

    // const fs = require('fs');
    // fs.writeFileSync("./sometextfile.txt",prettyDOM() );
 
    
    expect(screen.queryAllByText(/Tyler Poly Reclining Leather Armchair/i)[0]).toBeInTheDocument()
  }, 5000);
});