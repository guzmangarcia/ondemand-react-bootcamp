import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import Galery from '../../components/Galery/Galery'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import useWrappedProduct from '../../utils/wrappers/useWrappedProduct';
import styles from './ProductDetails.module.scss'
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
            <div className={styles.galery}>

            {!isProductLoading && <Galery data={product.galery} />}
            </div>
            
            <div className={styles.galerydetails}>
             {!isProductLoading && <ProductDescription item={product.galery[0]} {...product.properties} />}
             </div>
        </div>

    )



}