
import { useState, useEffect } from 'react';


//import useProducts from '../hooks-mooks/useProducts.js';
import useProducts from '../hooks/useProducts.js';


export default function useWrappedProduct({ productId ,pageNumber=1}) {

  const [productData, setProduct] = useState(() => ({
    product: {},
    isProductLoading: true,
  }));

  const { data: productDataFiltered, isLoading } = useProducts({ productId ,pageNumber});


  useEffect(() => {


    let product = [];
    if (productDataFiltered.results !== undefined) {


      product = productDataFiltered.results.map((item, index) => {


        return {
          properties: {
            uniqueId: item.id,
            name: item.data.name,
            price: item.data.price,
            categoryName: item.data.category.slug,
            tags: item.tags,
            sku: item.data.sku,
            description: item.data.description[0].text,
            specs: item.data.specs
          },
          galery: item.data.images.map((image, indexImage) => {
            return ({
              id: index + 1,
              src: image.image.url,
              alt: item.data.mainimage.alt,
              categoryId: item.data.category.id,
              navigationLink: `/detail?productId=${item.data.category.id}`,

            })

          })
        }


      })[0];


      //  console.log('useWrappedProduct', 'product', product);

      setProduct({ product, isProductLoading: isLoading });
    }
    // console.log(product)

  }, [productDataFiltered, isLoading]);

  return productData;
}
