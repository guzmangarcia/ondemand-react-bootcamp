import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Grid from './Grid';

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

it('Opens Grid', async () => {
  act(() => {
    render(<BrowserRouter><Grid /></BrowserRouter>, container);
  });

  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
});

// it("Opens Grid and waits to load", async () => {

//   jest.mock('../../utils/hooks/useFeaturedProducts', () => {
//     jest.fn().mockImplementation(() => {

//       return { productsData: [], isLoading: false };
//     });
//   });

//   await act(async () => {
//     render(<BrowserRouter>
//       <CartItemsContextProvider>
//         <Grid />
//       </CartItemsContextProvider>
//     </BrowserRouter>, container);
//   });

//   expect(screen.getAllByText(/Loading.../i)[0]).toBeInTheDocument();

//   fireEvent(
//     screen.getAllByText(/Loading.../i)[0],
//     new MouseEvent('click', {
//       bubbles: true,
//       cancelable: true,
//     }),
//   )

//   const loadingText = screen.getAllByText('Loading...')[0];
//   await waitFor(() => expect(screen).toHaveTextContent(/banner/i), {
//     timeout: 2000,
//     interval: 50,
//     onTimeout: (e) => { console.log(e) },
//   })

//   //  console.log(screen.debug());
//   //console.log(loadingText);

//   expect(screen.getAllByText(/banner/i)[0]).toBeInTheDocument()
// }, 15000);
