import { useContext } from "react";
import { CartItemsContext } from "../../components/CartItemsContextProvider/CartItemsContextProvider";
import Grid from "../../components/Grid/Grid";





  


export default function Cart() {
    const { cartItems, setCartItems } = useContext(CartItemsContext);


    return (
        <div>
            <h1>Cart</h1>
            {cartItems.length > 0 ? <Grid data={cartItems} setData={setCartItems} editable={true}/> : <p>No items found</p>}

 
        </div>
    );
}