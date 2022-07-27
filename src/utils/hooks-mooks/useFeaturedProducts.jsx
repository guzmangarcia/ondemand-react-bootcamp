import { useState, useEffect } from 'react';


import useFeaturedProductsMock from '../../mocks/en-us/featured-products.json';


export default function useFeaturedProducts() {

  const [FeaturedProducts, setFeaturedProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {

    const controller = new AbortController();

    async function getFeaturedProducts() {
      try {
        setFeaturedProducts({ data: {}, isLoading: true });

        const data = useFeaturedProductsMock;

        setFeaturedProducts({ data, isLoading: false });
      } catch (err) {
        setFeaturedProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts();

    return () => {
      controller.abort();
    };
  }, []);

  return FeaturedProducts;
}
