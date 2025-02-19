import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import useWrappedSearch from '../../utils/wrappers/useWrappedSearch';
import ProductsInfo from '../../components/ProductsInfo/ProductsInfo';

export default function Search() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPages, data, isLoading } = useWrappedSearch(
    {
      searchTerm,
      pageNumber: currentPage,
    },
  );

  useEffect(() => {
    const searchString = searchParams.get('q');
    if (searchString === undefined || searchString === null || searchString === '') return;
    setSearchTerm(searchString);
    setCurrentPage(1);
  }, [searchParams]);

  return (
    <div>
      {(!isLoading && data?.length > 0)
        ? (
          <ProductsInfo
            products={data}
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : <div>No products found</div>}
    </div>

  );
}
