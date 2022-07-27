import { useEffect, useState } from "react";
import CarouselGrid from "../CarouselGrid/CarouselGrid";
import './ProductInfo.css'
import Pagination from "../Pagination/Pagination";

export default function ProductInfo({ products }) {

    const [ gridData, setGridData ] = useState([]);
    const [totalPages, setTotalPages ]= useState(10);
    const [currentPage, setCurrentPage ]= useState(1);
    useEffect( () => {
            if (products=== undefined || products?.length===0) 
            {
                setGridData({});
                return;

            }
            setGridData(products.map
                ((data) => {
                    return data.srcs.map((image, index) => {
                        return {
                            id: index + 1,
                            src: image,
                            alt: data.alt,
                            text: data.text,
                            categoryId: data.categoryId
                        };
                    })
                }))

        }, [products,setGridData]);
        

    return (
        <div style={{ display: 'inline-block' }}>
         { (gridData?.length>0) ? <CarouselGrid gridData={gridData} gridName={'Products'} /> : <div>No items Found</div>}
        <Pagination totalPages={totalPages} currentPage={currentPage} setTotalPages={setTotalPages} setCurrentPage={setCurrentPage}/>
        </div>

    );



}