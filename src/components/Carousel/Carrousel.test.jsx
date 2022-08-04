import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import { render, screen, waitFor, waitForElementToBeRemoved, queryByText, queryAllByText,getElementsByClassName } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { act } from "react-dom/test-utils";
import Carrousel from './Carousel';
import { BrowserRouter } from 'react-router-dom';


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


it("Test Carrousel Loading", async () => {

  act(() => {
    render(<Carrousel />, container);
  });

  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
});


it("Test Carrousel 0 Elements", async () => {


  jest.mock('../../utils/hooks/useFeaturedProducts', () => {
    jest.fn().mockImplementation(() => {

      return { data: [], isLoading: false };
    });
  });



  await act(async () => {
    render(<Carrousel data={[]} />, container);
  });

  expect(screen.queryByText(/No elements found/i)).toBeInTheDocument();
}, 5000);

it("test Carrousel with 2 elements", async () => {

  const product = [{
    className: 'className test',
    count: 0,
    carouselCurrentSlideIndex: 0,
    src: 'src test',
    alt: 'alt test',
    text: ['text test'],
    id: 0,
    navigationLink: '/NavigationLink',
  },
  {
    className: '',
    count: 0,
    carouselCurrentSlideIndex: 0,
    src: '',
    alt: '',
    text: [''],
    id: 1,
    navigationLink: '',
  },
  ]
  await act(async () => {
    render(<BrowserRouter><Carrousel data={product} /></BrowserRouter>, container);
  });
  expect(screen.getAllByText('text test')[0]).toBeInTheDocument();
  expect(screen.getByRole("img", {className: /styleCarrouselImage className test/i})).toBeInTheDocument();
  expect(screen.getByRole("img", {src: /src test/i})).toBeInTheDocument();
  expect(screen.getByRole("img", {alt: /alt test/i})).toBeInTheDocument();
})


/*node --experimental-vm-modules node_modules/jest/bin/jest.js */