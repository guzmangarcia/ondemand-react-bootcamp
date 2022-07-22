import { useEffect, useState, useContext } from "react";
import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider'
import CarouselGrid from "../CarouselGrid/CarouselGrid";
import Pagination from "../Pagination/Pagination";


export default function ProductsInfo({ products, totalPages, currentPage, setCurrentPage }) {

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
                        uniqueId: data.uniqueId,
                        stock: data.stock
                    };
                })
            }))

    }, [products, setGridData]);

    function addItemToCard(item) {

        let cartItem = cartItems.find((cardItem) => cardItem.uniqueId === item.uniqueId)
        
        if (cartItem === undefined) {
            cartItem = {
                uniqueId: item.uniqueId,
                quantity: 0
            }
        }
        if (item.stock > cartItem.quantity+1)
        {
            cartItem.quantity++;
            console.log(cartItem.quantity)
            if(cartItem.quantity===1) setCartItems([...cartItems, cartItem])
        }
        else
        {
            alert('not enough stock');

        }
       
    }

    return (
        <div >
            {(gridData?.length > 0) ?
                <CarouselGrid
                    gridData={gridData}
                    gridName={'Products'}
                    buttonFunction={(item) => { addItemToCard(item); }}
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