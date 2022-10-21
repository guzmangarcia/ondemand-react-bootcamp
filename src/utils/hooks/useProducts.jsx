import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import useLatestAPI from './useLatestAPI';

export default function useProducts({
  productId,
  pageSize = 12,
  pageNumber = 1,
  selectedCategories,
}) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();

  const [products, setProducts] = useState({
    data: {},
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { };
    }

    const controller = new AbortController();
    let isloading = false;
    async function getProducts() {
      try {
        if (isloading) return;
        isloading = true;
        setProducts({ data: {}, isLoading: true });
        let searchByID = '';

        if (productId !== undefined) {
          searchByID = `&q=${encodeURIComponent(`[[at(document.id,"${productId}")]]`)}`;
        } else {
          searchByID = `&q=${encodeURIComponent('[[at(document.type, "product")]]')}`;
        }
        let strSelectedCategories = '';
        if (selectedCategories?.length > 0) {
          const selectedCategoriesMap = selectedCategories.map((category) => `"${category}"`);
          strSelectedCategories = `&q=${encodeURIComponent(`[[any(my.product.category,[${selectedCategoriesMap.toString()}])]]`)}`;
        }

        const url = `${API_BASE_URL}/documents/search?ref=${apiRef}${searchByID}${strSelectedCategories}&lang=en-us&pageSize=${pageSize}&page=${pageNumber}`;
        const response = await fetch(
          url,
          {
            signal: controller.signal,
          },
        );
        const data = await response.json();
        // isloading = false;
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
  }, [apiRef,
    isApiMetadataLoading,
    productId,
    pageNumber,
    selectedCategories.length]);

  return products;
}

useProducts.propTypes = {

  productId: PropTypes.string,
  pageSize: PropTypes.number,
  pageNumber: PropTypes.number,
  selectedCategories: PropTypes.arrayOf(PropTypes.string),
};
useProducts.defaultProps = {
  productId: undefined,
  pageSize: 12,
  pageNumber: 1,
  selectedCategories: [],
};
