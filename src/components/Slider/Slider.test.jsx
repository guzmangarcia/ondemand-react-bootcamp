import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Slider from './Slider';

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

it('Test Slider Loading', async () => {
  act(() => {
    render(<Slider />, container);
  });

  expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
});

it('Test Slider 0 Elements', async () => {
  jest.mock('../../utils/hooks/useFeaturedProducts', () => {
    jest.fn().mockImplementation(() => ({ productsData: [], isLoading: false }));
  });

  await act(async () => {
    render(<Slider elements={[]} />, container);
  });

  expect(screen.queryByText(/No elements found/i)).toBeInTheDocument();
}, 5000);

it('test slider with 2 elements', async () => {
  const product = [{
    id: 1,
    src: '',
    alt: 'banner products!',
    text: 'banner products!',
  },
  {
    id: 2,
    src: '',
    alt: 'banner products!',
    text: 'banner products!',
  },
  ];
  await act(async () => {
    render(<Slider elements={product} />, container);
  });
  expect(screen.getAllByText(/banner products!/i)[0]).toBeInTheDocument();
});

/* node --experimental-vm-modules node_modules/jest/bin/jest.js */
