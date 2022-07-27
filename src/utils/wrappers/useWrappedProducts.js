
import { useState, useEffect } from 'react';


import useProducts from '../hooks-mooks/useProducts.js';


export default function useWrappedProducts({ filterCategories, page, pageSize }) {

  const [productsData, setProducts] = useState(() => ({
    products: {},
    isProductsLoading: true,
  }));

  const { data: productsDataFiltered, isLoading } = useProducts(filterCategories, page, pageSize);

  useEffect(() => {

    let products = [];
    if (productsDataFiltered.results !== undefined) {

      products = productsDataFiltered.results.map((item, index) => {
        return {

          id: index + 1,
          categoryId: item.data.category.id,
          srcs: item.data.images.map((image, index) => { return image.image.url }),
          alt: item.data.mainimage.alt,
          text: [item.data.name, item.data.price, item.data.category.slug]
        };
      })
      // console.log(products);

      setProducts({ products, isProductsLoading: isLoading });
    }
    // console.log(products)

  }, [productsDataFiltered, isLoading]);

  return productsData;
}
