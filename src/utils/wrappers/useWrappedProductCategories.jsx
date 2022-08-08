import { useState, useEffect } from 'react';
import useProductCategories from '../hooks/useProductCategories';
// import useProductCategories from '../hooks-mooks/useProductCategories'

export default function useWrappedProductCategories({ pageNumber = 1 }) {
  const [wrappedData, setWrappedData] = useState(() => ({
    productCategories: {},
    isProductCategoriesLoading: true,
  }));
  const { data: ProductCategories, isLoading } = useProductCategories({ pageNumber });

  useEffect(() => {
    let productCategories = [];
    if (ProductCategories?.results !== undefined) {
      productCategories = ProductCategories.results.map((row, index) => ({
        id: index + 1,
        src: row.data.main_image.url,
        alt: row.data.main_image.alt,
        text: [row.data.name],
        navigationLink: `/products?category=${row.id}`,
      }));

      setWrappedData({
        productCategories,
        isProductCategoriesLoading: isLoading,

      });
    }
  }, [ProductCategories, isLoading]);

  return wrappedData;
}
