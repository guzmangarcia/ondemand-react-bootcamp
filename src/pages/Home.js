import React from 'react';
import styles from './Home.module.scss'

//import useFeaturedBanners  from '../utils/hooks/useFeaturedBanners';
//import useFeaturedProducts from '../utils/hooks/useFeaturedProducts';
//import useProductCategories from  '../utils/hooks/useProductCategories';


import useFeaturedBanners from '../utils/hooks-mooks/useFeaturedBanners';
import useFeaturedProducts from '../utils/hooks-mooks/useFeaturedProducts';
import useProductCategories from '../utils/hooks-mooks/useProductCategories';


import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Slider from '../components/Slider/Slider'
import ProductCategories from '../components/ProductCategories/ProductCategories'

export default function Home() {
  const { data: bannerData, isLoading: isBannerLoading } = useFeaturedBanners();

  let bannerDataItems = [];
  if (bannerData.results !== undefined) {

    // console.log(bannerData.results)
    bannerDataItems = bannerData.results.map((row, index) => {
      return {
        id: index + 1,
        src: row.data.main_image.url,
        alt: 'banner products!',
        text: 'banner products!'
      };
    });
  }

  const { data: productsData, isLoading: isProductsLoading } = useFeaturedProducts();
  //  console.log(useFeaturedData.results);
  let featuredProducts = [];
  if (productsData.results !== undefined) {

    // console.log(useFeaturedData.results)
    featuredProducts = productsData.results.map((row, index) => {
      // console.log("data",row.data);
      return {
        id: index + 1,
        srcs: row.data.images,
        alt: row.data.mainimage.alt,
        text: [row.data.name, row.data.price, row.data.category.slug]
      };
    });
  }

  const { data: ProductCategoriesData, isLoading: isProductCategoriesLoading } = useProductCategories();
  //  console.log(useFeaturedData.results);
  let productCategories = [];
  if (ProductCategoriesData.results !== undefined) {
    // console.log(useFeaturedData.results)
    productCategories = ProductCategoriesData.results.map((row, index) => {
      // console.log("data",row.data);
      return {
        id: index + 1,
        src: row.data.main_image.url,
        alt: row.data.main_image.alt,
        text: [row.data.name],
      };
    });
  }
  // ${row.data.category.slug}



  // console.log("featuredItems", featuredDataItems);
  return (


    <div className={styles.textcontent}>
      {isBannerLoading && <div>Loading...</div>}
      {(!isBannerLoading && bannerDataItems !== null && bannerDataItems.length > 0) && <Slider index={1} elements={bannerDataItems} />}
      <br />
      {isProductCategoriesLoading && <div>Loading...</div>}
      {(!isProductCategoriesLoading && productCategories !== null && productCategories.length > 0) && <ProductCategories productCategories={productCategories} />}
      <br />
      {isProductsLoading && <div>Loading...</div>}
      {(!isProductsLoading && featuredProducts !== null && featuredProducts.length > 0) && <FeaturedProducts featuredProducts={featuredProducts} />}
    </div>
  );
}

