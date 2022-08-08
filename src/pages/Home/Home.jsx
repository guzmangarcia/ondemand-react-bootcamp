import React from 'react';
import styles from './Home.module.scss';

import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import ProductCategories from '../../components/ProductCategories/ProductCategories';

import useWrappedFeaturedProducts from '../../utils/wrappers/useWrappedFeaturedProducts';
import useWrappedProductCategories from '../../utils/wrappers/useWrappedProductCategories';
import useWrappedFeaturedBanners from '../../utils/wrappers/useWrappedFeaturedBanners';

// import { useContext } from "react"

export default function Home() {
  const { bannerDataItems, isBannerLoading } = useWrappedFeaturedBanners({ pageNumber: 1 });
  const { featuredProducts, isProductsLoading } = useWrappedFeaturedProducts({ pageNumber: 1 });
  const {
    productCategories,
    isProductCategoriesLoading,
  } = useWrappedProductCategories({ pageNumber: 1 });

  return (

    <div className={styles.textcontent}>

      <div>
        {(isBannerLoading
          || bannerDataItems === null
          || bannerDataItems.length === 0)
          ? <div>Loading...</div>
          : <Slider index={1} elements={bannerDataItems} />}
      </div>
      <div>
        {(isProductCategoriesLoading
          || productCategories === null
          || productCategories.length === 0)
          ? <div>Loading...</div>
          : <ProductCategories productCategories={productCategories} />}
      </div>
      <div>
        {(isProductsLoading
          || featuredProducts === null
          || featuredProducts.length === 0)
          ? <div>Loading...</div>
          : <FeaturedProducts featuredProducts={featuredProducts} />}
      </div>
    </div>

  );
}
