import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Galery from '../../components/Galery/Galery'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import useWrappedProduct from '../../utils/wrappers/useWrappedProduct';

export default function ProductDetails() {
    const [searchParams] = useSearchParams();
    const [productId, setproductId] = useState('');
    const { product, isProductLoading } = useWrappedProduct({ productId ,pageNumber:1});

    useEffect(() => {

        const productelected = searchParams.get("productId");
        if (productelected === undefined || productelected === null || productelected === '') return;
        setproductId(productelected)
    }, [searchParams]);

    

    return (
        <div>

             {!isProductLoading && <Galery data={product.galery} />}
             {!isProductLoading && <ProductDescription {...product.properties} />}
        </div>

    )



}