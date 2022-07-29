import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import useLatestAPI from './useLatestAPI';

export default function useProducts({ productId, pageSize = 12, pageNumber = 1 }) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [products, setProducts] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { };
    }

    const controller = new AbortController();

    async function getProducts() {
      try {
        let searchByID = '';
        if (productId !== undefined) {
          searchByID = `&q=${encodeURIComponent(`[[at(document.id,"${productId}")]]`)}`;
        } else {
          searchByID = `&q=${encodeURIComponent('[[at(document.type, "product")]]')}`;
        }

        setProducts({ data: {}, isLoading: true });
        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}${searchByID}&lang=en-us&pageSize=${pageSize}&page=${pageNumber}`;

        const response = await fetch(
          url,
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();

        setProducts({ data, isLoading: false });
      } catch (err) {
        setProducts({ data: {}, isLoading: false });
      }
    }

    getProducts();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, pageSize, productId, pageNumber]);

  return products;
}

useProducts.propTypes = {
  className: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,

};
