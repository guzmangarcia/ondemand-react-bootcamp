import { useEffect, useState, useContext } from 'react';
import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider';
import CarouselGrid from '../CarouselGrid/CarouselGrid';
import Pagination from '../Pagination/Pagination';

export default function ProductsInfo({
  products, totalPages, currentPage, setCurrentPage,
}) {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    if (products === undefined || products?.length === 0) {
      setGridData({});
      return;
    }
    setGridData(products.map((data) => data.srcs.map((image, index) => ({
      id: index + 1,
      src: image,
      alt: data.alt,
      text: data.text,
      categoryId: data.categoryId,
      navigationLink: data.navigationLink,
      uniqueId: data.uniqueId,
      stock: data.stock,
      name: data.name,
      price: data.price,
    }))));
  }, [products, setGridData]);

  function addItemToCard(item) {
    let totalElements = 1;
    let elements = cartItems;
    let cartItem = cartItems.find((cartItem) => cartItem.uniqueId === item.uniqueId);
    if (cartItem !== undefined) {
      totalElements += cartItem.quantity;
      elements = cartItems.filter((cartItem) => cartItem.uniqueId !== item.uniqueId);
    } else {
      cartItem = {
        uniqueId: item.uniqueId,
        quantity: 0,
        item,
      };
    }
    if (totalElements > item.stock) {
      setTimeout(() => {
        alert('not enough stock');
      }, 100);
      return;
    }
    cartItem.quantity = totalElements;

    setCartItems([...elements, cartItem]);
  }

  return (
    <div>
      {(gridData?.length > 0)
        ? (
          <div>
            <CarouselGrid
              gridData={gridData}
              gridName="Products"
              buttonFunction={(item) => { addItemToCard(item); }}
              buttonText="Add to cart"
              showButton={(item) => item[0].stock > 0}
            />
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )
        : <div>No items Found</div>}

    </div>

  );
}
