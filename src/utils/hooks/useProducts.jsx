import { useState, useEffect } from 'react';

import useProductsMock from '../../mocks/en-us/products.json';

export default function useProducts() {
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    const controller = new AbortController();
    let isloading = false;
    async function getProducts() {
      try {
        setProducts({ data: {}, isLoading: true });

        const data = useProductsMock;

        setProducts({ data, isLoading: false });
      } catch (err) {
        // isloading = false;
        setProducts({ data: {}, isLoading: false });
      }
    }


    getProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return products;
}
<<<<<<< HEAD
=======
