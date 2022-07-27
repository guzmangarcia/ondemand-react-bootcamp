
import { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts';


export default function useWrappedProducts({ productId, pageNumber =1}) {

  const [productsData, setProducts] = useState(() => ({
    
    totalPages:1,
    products: {},
    isProductsLoading: true,
  }));

  const { data: productsDataFiltered, isLoading } = useProducts({ productId,pageNumber });

  useEffect(() => {

    let products = []; 
    let totalPages=1;
    if (productsDataFiltered.results !== undefined) {

      totalPages=productsDataFiltered.total_pages;
      products = productsDataFiltered.results.map((item, index) => {
        return {

          id: index + 1,
          categoryId: item.data.category.id,
          srcs: item.data.images.map((image, index) => { return image.image.url }),
          alt: item.data.mainimage.alt,
          text: [item.data.name, item.data.price, item.data.category.slug],
          navigationLink: `/detail?productId=${item.id}`,
          uniqueId:item.id,
          stock:item.data.stock,
          name:item.data.name, 
          price:item.data.price, 
        };
      })
 

      setProducts({ totalPages,products, isProductsLoading: isLoading });
    }
  

  }, [productsDataFiltered, isLoading]);

  return productsData;
}
