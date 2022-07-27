import { useState, useEffect } from 'react';
 import useFeaturedProducts from '../hooks/useFeaturedProducts';
//import useFeaturedProducts from '../hooks-mooks/useFeaturedProducts';

export default function useWrappedFeaturedProducts({pageNumber=1}) {



  const [wrappedData, setWrappedData] = useState(() => ({
    featuredProducts: {},
    isProductsLoading: true
  }));
  const { data: productsData, isLoading } = useFeaturedProducts({pageNumber});

  useEffect(() => {

    
    let featuredProducts = [];
    if (productsData.results !== undefined) {
      //console.log(productsData);
      
      featuredProducts = productsData.results.map((row, index) => {

        return {
          id: index + 1,
          srcs: row.data.images,
          alt: row.data.mainimage.alt,
          text: [row.data.name, row.data.price, row.data.category.slug],
          navigationLink:`/detail?productId=${row.id}`,
          uniqueId:row.id
        };
      });
      //console.log(featuredProducts);
      setWrappedData({
        featuredProducts: featuredProducts,
        isProductsLoading: isLoading

      });

    }

  }, [productsData, isLoading]);

  return wrappedData;

}