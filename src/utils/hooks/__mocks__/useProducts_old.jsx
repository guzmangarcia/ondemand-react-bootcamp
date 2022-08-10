import { useState, useEffect } from 'react';

import useProductsMock from '../../../mocks/en-us/products.json';

export default function useProducts(
  productId,
  pageNumber = 1,
  selectedCategories = [],
) {
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    const controller = new AbortController();

    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        let data = '';
        data = useProductsMock;

        setProducts({ data, isLoading: false });
      } catch (err) {
        setProducts({ data: {}, isLoading: false });
      }
    }
    setTimeout(() => {
      getProducts();
    }, 100);

    return () => {
      controller.abort();
    };
  }, [productId, pageNumber, selectedCategories]);

  return products;
}
