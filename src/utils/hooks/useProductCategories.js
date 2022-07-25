import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export default function useProductCategories() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [ProductCategories, setProductCategories] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getProductCategories() {
      try {
        setProductCategories({ data: {}, isLoading: true });
        const url =`${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent('[[at(document.type, "category")]]')}&lang=en-us&pageSize=5`;
        console.log("test:", url);

        const response = await fetch(
          url,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

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
  }, [apiRef, isApiMetadataLoading]);

  return ProductCategories;
}
