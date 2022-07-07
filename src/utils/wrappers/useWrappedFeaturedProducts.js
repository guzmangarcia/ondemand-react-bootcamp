import { useState, useEffect } from 'react';
// import useFeaturedProducts from '../hooks/useFeaturedProducts';
import useFeaturedProducts from '../hooks-mooks/useFeaturedProducts';

export default function useWrappedFeaturedProducts() {



  const [wrappedData, setWrappedData] = useState(() => ({
    featuredProducts: {},
    isProductsLoading: false
  }));
  const { data: productsData, isLoading } = useFeaturedProducts();

  useEffect(() => {

    let featuredProducts = [];
    if (productsData.results !== undefined) {

      featuredProducts = productsData.results.map((row, index) => {

        return {
          id: index + 1,
          srcs: row.data.images,
          alt: row.data.mainimage.alt,
          text: [row.data.name, row.data.price, row.data.category.slug]
        };
      });

      setWrappedData({
        featuredProducts: featuredProducts,
        isProductsLoading: isLoading

      });

    }

  }, [productsData, isLoading]);

  return wrappedData;

}