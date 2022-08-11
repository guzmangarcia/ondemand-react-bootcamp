import useProducts from '../../utils/hooks/useProducts';
// import { useEffect, useState } from 'react';
// import useWrappedProduct from '../../utils/wrappers/useWrappedProduct';

export default function Test() {
  const { product, isProductLoading } = useProducts({ productId: 'YZZ6OhIAACgAvlE1' });
  return (
    <div>
      {isProductLoading && (
      <div>
        {' '}
        {JSON.stringify(product)}
      </div>
      )}
    </div>

  );
}
