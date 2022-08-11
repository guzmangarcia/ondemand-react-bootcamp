// import useWrappedProducts from '../../utils/wrappers/useWrappedProducts';
import useWrappedProductCategoriesMenu from '../../utils/wrappers/useWrappedProductCategoriesMenu';
import useYamasaii from '../../utils/hooks/useProducts';
// import { useEffect, useState } from 'react';

export default function Test() {
  const {
    products,
    isProductsLoading,

  } = useYamasaii({
    pageSize: 12,
    pageNumber: 1,
    selectedCategories: [],

  });

  const {
    productCategories,
    isProductCategoriesLoading,
  } = useWrappedProductCategoriesMenu({ pageNumber: 1 });

  return (

    <div>

      {!isProductCategoriesLoading && (
        <div>
          <div> fdsfdssdfsfsd</div>
          {console.log(productCategories, isProductCategoriesLoading)}
        </div>
      )}

      {!isProductsLoading && (
        <div>
          <div> fdsfdssdfsfsd</div>
          {console.log(products, isProductsLoading)}
        </div>
      )}
    </div>

  );
}
