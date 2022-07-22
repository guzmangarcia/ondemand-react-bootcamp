import { useEffect, useState, useContext } from "react";
import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider'
import CarouselGrid from "../CarouselGrid/CarouselGrid";
import Pagination from "../Pagination/Pagination";
import './ProductsInfo.css'

export default function ProductsInfo({ products ,totalPages,currentPage, setCurrentPage}) {

    const { cartItems, setCartItems } = useContext(CartItemsContext);
    // console.log(CartItems)
    // console.log(setCartItems)

    const [gridData, setGridData] = useState([]);

    useEffect(() => {
        if (products === undefined || products?.length === 0) {
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
                        categoryId: data.categoryId,
                        navigationLink: data.navigationLink,
                        uniqueId: data.uniqueId
                    };
                })
            }))

    }, [products, setGridData]);

    function addStock()
    {
        
    }

    return (
        <div style={{ display: 'inline-block' }}>
            {(gridData?.length > 0) ?
                <CarouselGrid
                    gridData={gridData}
                    gridName={'Products'}
                    buttonFunction={(id) => { /*console.log("id", id);*/ setCartItems([...cartItems, id]) }}
                    buttonText='Add to cart' />
                : <div>No items Found</div>
            }

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage} />
        </div>

    );



}