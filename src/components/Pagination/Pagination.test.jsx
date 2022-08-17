import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import Pagination from './Pagination';

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

it(' Pagination Controls are generated correctly based on the number of results fetched from the API and the maximum number of products per page', async () => {
  let currentPage = 1;
  act(() => {
    render(

      <Pagination
        totalPages={5}
        currentPage={currentPage}
        setCurrentPage={(value) => { currentPage = value; }}
      />,

      container,
    );
  });

  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('2')).toBeInTheDocument();
  expect(screen.getByText('3')).toBeInTheDocument();
  expect(screen.getByText('4')).toBeInTheDocument();
  expect(screen.getByText('5')).toBeInTheDocument();
  expect(screen.getByText('>')).toBeInTheDocument();
  expect(screen.getByText('<')).toBeInTheDocument();
});

it('Test Pagination numbers click', async () => {
  let currentPage = 1;
  act(() => {
    render(

      <Pagination
        totalPages={5}
        currentPage={currentPage}
        setCurrentPage={(value) => { currentPage = value; }}
      />,

      container,
    );
  });
  fireEvent(
    screen.getByText('2'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(currentPage).toBe(2);
});

it('Next button is working as expected', async () => {
  let currentPage = 1;
  act(() => {
    render(

      <Pagination
        totalPages={5}
        currentPage={currentPage}
        setCurrentPage={(value) => { currentPage = value; }}
      />,

      container,
    );
  });
  fireEvent(
    screen.getByText(/>/i),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(currentPage).toBe(2);
});

it('prev button is working as expected', async () => {
  let currentPage = 1;
  act(() => {
    render(

      <Pagination
        totalPages={5}
        currentPage={currentPage}
        setCurrentPage={(value) => { currentPage = value; }}
      />,

      container,
    );
  });
  fireEvent(
    screen.getByText(/</i),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );
  expect(currentPage).toBe(5);
});

/* node --experimental-vm-modules node_modules/jest/bin/jest.js */
/* yarn eslint .  --ext .js --ext .jsx --fix */
