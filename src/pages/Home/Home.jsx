import React from 'react';
import styles from './Home.module.scss';
import useWrappedFeaturedProducts from '../../utils/wrappers/useWrappedFeaturedProducts';
import useWrappedProductCategories from '../../utils/wrappers/useWrappedProductCategories';
import useWrappedFeaturedBanners from '../../utils/wrappers/useWrappedFeaturedBanners';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Slider from '../../components/Slider/Slider';
import ProductCategories from '../../components/ProductCategories/ProductCategories';

// import { useContext } from "react"



export default function Home() {

  const { bannerDataItems, isBannerLoading } = useWrappedFeaturedBanners({ pageNumber: 1 });
  const { featuredProducts, isProductsLoading } = useWrappedFeaturedProducts({ pageNumber: 1 });
  const { productCategories, isProductCategoriesLoading } = useWrappedProductCategories({ pageNumber: 1 });

  return (


    <div className={styles.textcontent}>

      <div>
        {isBannerLoading && <div>Loading...</div>}
        {(!isBannerLoading && bannerDataItems !== null && bannerDataItems.length > 0) && <Slider index={1} elements={bannerDataItems} />}
      </div>
      <div >
        {isProductCategoriesLoading && <div>Loading...</div>}
        {(!isProductCategoriesLoading && productCategories !== null && productCategories.length > 0) && <ProductCategories productCategories={productCategories} />}
      </div>
      <div>
        {isProductsLoading && <div>Loading...</div>}
        {(!isProductsLoading && featuredProducts !== null && featuredProducts.length > 0) && <FeaturedProducts featuredProducts={featuredProducts} />}
      </div>
    </div>

  );
}

