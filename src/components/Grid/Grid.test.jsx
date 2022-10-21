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
