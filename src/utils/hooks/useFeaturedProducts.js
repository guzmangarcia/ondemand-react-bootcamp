import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export default function useFeaturedProducts({pageNumber=1}) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredProducts, setFeaturedProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedProducts({pageNumber}) {
      try {
        setFeaturedProducts({ data: {}, isLoading: true });
        const url =`${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent('[[at(document.type, "product")]]')}&q=${encodeURIComponent('[[at(document.tags, ["Featured"])]]')}&lang=en-us&pageSize=16&page=${pageNumber}`;
       
        // console.log("test:", apiRef);

        const response = await fetch(
          url,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setFeaturedProducts({ data, isLoading: false });
      } catch (err) {
        setFeaturedProducts({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedProducts({pageNumber});

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading,pageNumber]);

  return featuredProducts;
}
