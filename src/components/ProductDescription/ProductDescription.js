import { useContext, useState } from "react"
import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider'

export default function ProductDescription({ name, price, sku, categoryName, tags, description, specs, stock, uniqueId }) {

    const [quantity, setQuantity] = useState(1);
    const { cartItems, setCartItems } = useContext(CartItemsContext);

    function addToCard() {

        let totalElements = quantity;
        let cartItem = cartItems.find((item) => item.uniqueId === uniqueId);
        if (cartItem !== undefined) {
            totalElements += cartItem.quantity;

        }
        else {
            cartItem = {
                uniqueId: uniqueId,
                quantity: 0
            }
            setCartItems([...cartItems, cartItem])
        }
        if (totalElements > stock) {
            setTimeout(() => {
                alert('not enough stock');
            }, 100);
        }
        else {
            cartItem.quantity++;
        }
        console.log(cartItem)


    }

    return (
        <div>
            <p><label><b>Name: </b>{name}</label></p>
            <p><label><b>Price:</b> {price}</label></p>
            <p><label><b>SKU:</b> {sku}</label></p>
            <p><label><b>Category:</b> {categoryName}</label></p>
            <p><label><b>Tags:</b> {tags.map((tag, id) => { return (<label key={id}>{tag} </label>) })}</label></p>
            <p><label><b>Description:</b> <br /><br /> {description}</label></p>
            <div><b>Qty:</b> <input type={'number'} value={quantity} onChange={(e) => setQuantity(e.target.value)} />  <button onClick={() => { addToCard() }} >Add to cart</button></div>
            <div><p><b>Specs:</b></p>
                <ul>
                    {specs.map((spec, index) => { return (<li key={index}><b>{spec.spec_name}</b>: {spec.spec_value}</li>) })}
                </ul>
            </div>
        </div>


    )



}