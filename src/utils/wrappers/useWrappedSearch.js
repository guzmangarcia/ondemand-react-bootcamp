
import { useState, useEffect } from 'react';
import useSearch from '../hooks/useSearch';

export default function useWrappedSearch({ searchTerm ,pageNumber=1 }) {

  const [wrappedData, setWrappedData] = useState(() => ({
    totalPages:1,
    data: {},
    isLoading: true,
  }));

  const { data, isLoading } = useSearch({searchTerm, pageNumber });

  useEffect(() => {
    
    let dataFiltered = [];
    let totalPages=1;
    if (data.results !== undefined) {

      totalPages=data.total_pages;
      //console.log('totalPages',totalPages)
      dataFiltered = data.results.map((item, index) => {
        return {

          id: index + 1,
          categoryId: item.data.category.id,
          srcs: item.data.images.map((image, index) => { return image.image.url }),
          alt: item.data.mainimage.alt,
          text: [item.data.name, item.data.price, item.data.category.slug],
          navigationLink: `/detail?productId=${item.id}`,
          uniqueId:item.id
        };
      })
        setWrappedData({ totalPages,data:dataFiltered,  isLoading });
    }
     //console.log(dataFiltered)

  }, [data, isLoading,searchTerm,pageNumber]);

  return wrappedData;
}
