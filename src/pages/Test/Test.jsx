// import useWrappedProducts from '../../utils/wrappers/useWrappedProducts';

import useProducts from '../../utils/hooks/useProducts';
// import { useEffect, useState } from 'react';

export default function Test() {
  let {
    data,
    isLoading,

  } = useProducts({
    pageSize: 12,
    pageNumber: 1,
    selectedCategories: ['aaaa'],

  });



  return (

    <div>



      {!isLoading && (
        <div>
          <div> fdsfdssdfsfsd</div>
          {console.log(data,isLoading,)}
        </div>
      )}
    </div>

  );
}
