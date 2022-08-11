import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {
  render, screen, waitFor, waitForElementToBeRemoved, queryByText, queryAllByText, getElementsByClassName,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import CarouselGrid from './CarouselGrid';

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

it('Test CarouselGrid Loading', async () => {
  act(() => {
    render(<CarouselGrid />, container);
  });

  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
});

it('Test Carrousel 0 Elements', async () => {
  await act(async () => {
    render(<CarouselGrid
      gridData={[]}
      gridName="grid test"
      carouselName=""
      carouselIndex={1}
      buttonFunction={() => { }}
      buttonText={undefined}
      showButton={() => false}
    />, container);
  });

  expect(screen.queryByText(/No elements found/i)).toBeInTheDocument();
}, 5000);

it('test CarouselGrid with 2 elements', async () => {
  const product = [[{
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
  ]];
  await act(async () => {
    render(<BrowserRouter>
      <CarouselGrid
        gridData={product}
        gridName="grid test"
        carouselName=""
        carouselIndex={1}
        buttonFunction={() => { }}
        buttonText={undefined}
        showButton={() => false}
      />
    </BrowserRouter>, container);
  });
  expect(screen.getAllByText('text test')[0]).toBeInTheDocument();
  expect(screen.getAllByAltText('alt test')[0]).toBeInTheDocument();
  expect(screen.getAllByAltText('alt test')[0].className).toContain('styleCarrouselImage className test');
  expect(screen.getAllByAltText('alt test')[0].src).toContain('src%20test');
});

/* node --experimental-vm-modules node_modules/jest/bin/jest.js */
