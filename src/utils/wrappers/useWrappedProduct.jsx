import { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts';

export default function useWrappedProduct({ productId, pageNumber = 1 }) {
  const [productData, setProduct] = useState(() => ({
    product: {},
    isProductLoading: true,
  }));

  const { data: productDataFiltered, isLoading } = useProducts({ productId, pageNumber });

  useEffect(() => {
    let product = [];
    if (productDataFiltered?.results !== undefined) {
      // eslint-disable-next-line prefer-destructuring
      product = productDataFiltered.results.map((item) => ({
        properties: {
          uniqueId: item.id,
          name: item.data.name,
          price: item.data.price,
          categoryName: item.data.category.slug,
          tags: item.tags,
          sku: item.data.sku,
          description: item.data.description[0].text,
          specs: item.data.specs,
          stock: item.data.stock,
        },
        galery: item.data.images.map((image, indexImage) => ({
          id: indexImage + 1,
          src: image.image.url,
          alt: item.data.mainimage.alt,
          categoryId: item.data.category.id,
          navigationLink: `/detail?productId=${item.data.category.id}`,

        })),
      }))[0];

      setProduct({ product, isProductLoading: isLoading });
    }
  }, [productDataFiltered, isLoading]);

  return productData;
}
