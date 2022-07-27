import { useState, useEffect } from 'react';
// import useProductCategories from '../hooks/useProductCategories'
import useProductCategories from '../hooks-mooks/useProductCategories'

export default function useWrappedProductCategoriesMenu({pageNumber=1}) {



  const [wrappedData, setWrappedData] = useState(() => ({
    productCategories: {},
    isProductCategoriesLoading: true
  }));
  const { data: ProductCategories, isLoading } = useProductCategories({pageNumber});

  useEffect(() => {


    let productCategories = [];
    if (ProductCategories.results !== undefined) {
      
     // console.log(ProductCategories);
      productCategories = ProductCategories.results.map((row, index) => {

        return {
          id: index + 1,
          categoryId: row.id,
          // src: row.data.main_image.url,
          alt: row.data.main_image.alt,
          text: [row.data.name],
      
        };
      });
      //console.log(productCategories);

      setWrappedData({
        productCategories: productCategories,
        isProductCategoriesLoading: isLoading

      });

    }


  }, [ProductCategories, isLoading]);

  return wrappedData;

}