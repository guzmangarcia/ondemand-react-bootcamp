import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Footer from './Footer';

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

it('Test Footer text', async () => {
  act(() => {
    render(<Footer />, container);
  });

  expect(screen.getByText('Ecommerce created during Wizeline’s Academy React Bootcamp')).toBeInTheDocument();
});

/* node --experimental-vm-modules node_modules/jest/bin/jest.js */
/* yarn eslint .  --ext .js --ext .jsx --fix */
