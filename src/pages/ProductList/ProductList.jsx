import { useEffect, useState } from 'react';
import SideBar from '../../components/SideBar/SideBar';
import ProductsInfo from '../../components/ProductsInfo/ProductsInfo';
import useWrappedProductCategoriesMenu from '../../utils/wrappers/useWrappedProductCategoriesMenu';
import useWrappedProducts from '../../utils/wrappers/useWrappedProducts';
import styles from './ProductList.module.scss';

function ProductList() {
  const [selectedCategories, updateSelectedCategories] = useState([]);
  const [readyForRender, setReadyForRender] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const {
    products,
    isProductsLoading,
    totalPages,
  } = useWrappedProducts({ pageNumber: currentPage, selectedCategories });
  const {
    productCategories,
    isProductCategoriesLoading,
  } = useWrappedProductCategoriesMenu({ pageNumber: 1 });

  useEffect(
    () => {
      setReadyForRender(false);
      if (isProductsLoading || isProductCategoriesLoading || selectedCategories === undefined) {
        return;
      }
      setReadyForRender(true);
    },
    [selectedCategories,
      productCategories,
      products,
      isProductsLoading,
      isProductCategoriesLoading,
      readyForRender],
  );

  return (
    <div>

      <h1 className={styles.flexDiv}>This is the Product List Page </h1>
      <div className={styles.sidePanel}>
        {!readyForRender ? <div>Loading...</div>
          : (
            <SideBar
              menuListItems={productCategories}
              selectedCategories={selectedCategories}
              updateParentSelectedCategories={updateSelectedCategories}
              setCurrentPage={setCurrentPage}
            />
          )}
        <div>

          {!readyForRender ? <div>Loading...</div>
            : (
              <ProductsInfo
                products={products}
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          {(selectedCategories?.length > 0) && <button type="button" onClick={() => updateSelectedCategories([])}>clear filters</button>}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
