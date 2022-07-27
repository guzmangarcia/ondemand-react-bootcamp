import { useState, useEffect } from 'react';
import useProductCategoriesMock from '../../mocks/en-us/product-categories.json';

export default function useProductCategories() {

  const [ProductCategories, setProductCategories] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {

    const controller = new AbortController();

    async function getProductCategories() {
      try {
        setProductCategories({ data: {}, isLoading: true });

        const data = useProductCategoriesMock;

        setProductCategories({ data, isLoading: false });
      } catch (err) {
        setProductCategories({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getProductCategories();

    return () => {
      controller.abort();
    };
  }, []);

  return ProductCategories;
}
