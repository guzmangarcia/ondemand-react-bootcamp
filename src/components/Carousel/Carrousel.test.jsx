import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Carrousel from './Carousel';

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

it('Test Carrousel Loading', async () => {
  act(() => {
    render(<Carrousel />, container);
  });

  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
});

it('Test Carrousel 0 Elements', async () => {
  await act(async () => {
    render(<Carrousel data={[]} />, container);
  });

  expect(screen.queryByText(/No elements found/i)).toBeInTheDocument();
}, 5000);

it('test Carrousel with 2 elements', async () => {
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
  ];
  await act(async () => {
    render(<BrowserRouter><Carrousel data={product} /></BrowserRouter>, container);
  });

  expect(screen.getAllByText('text test')[0]).toBeInTheDocument();
  expect(screen.getAllByAltText('alt test')[0]).toBeInTheDocument();
  expect(screen.getAllByAltText('alt test')[0].className).toContain('styleCarrouselImage className test');
  expect(screen.getAllByAltText('alt test')[0].src).toContain('src%20test');
});

/* node --experimental-vm-modules node_modules/jest/bin/jest.js */
