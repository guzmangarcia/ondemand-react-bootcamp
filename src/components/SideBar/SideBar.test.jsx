import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  render, screen, waitFor, waitForElementToBeRemoved, queryByText, queryAllByText, fireEvent, renderHook, prettyDOM,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import SideBar from './SideBar';
import { CartItemsContextProvider } from '../CartItemsContextProvider/CartItemsContextProvider';

jest.mock('../../utils/hooks/useProductCategories');

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('SideBar Loading state', () => {
  it('Opens SideBar and shows Loading...', async () => {
    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <SideBar />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    expect(screen.getAllByText('Loading...')[0]).toBeInTheDocument();
  });
});

describe('SideBar testing', () => {
  it('Opens SideBar', async () => {
    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <SideBar menuListItems={[{ categoryId: 'categoryId', alt: 'categoryId' }]} selectedCategories={[]} />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    await waitFor(() => expect(screen.queryAllByText(/categoryId/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: (e) => {
      },
    });

    expect(screen.queryAllByText(/categoryId/i)[0]).toBeInTheDocument();
  }, 5000);
});

describe('useFeaturedBanners testing', () => {
  it('Opens SideBar and clicks in a category', async () => {
    const selectedCategories = [];
    await act(async () => {
      render(<BrowserRouter>
        <CartItemsContextProvider>
          <SideBar
            menuListItems={[{ categoryId: 'categoryId', alt: 'categoryId' }]}
            selectedCategories={[]}
            updateParentSelectedCategories={(selectedCategory) => { selectedCategories.push(...selectedCategory); }}
          />
        </CartItemsContextProvider>
      </BrowserRouter>, container);
    });

    await waitFor(() => expect(screen.queryAllByText(/categoryId/i)[0]).toBeInTheDocument(), {
      timeout: 1000,
      interval: 50,
      onTimeout: (e) => {
      },
    });

    fireEvent(
      screen.getAllByText(/categoryId/i)[0],
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    );

    expect(selectedCategories).toContain('categoryId');
  }, 5000);
});
