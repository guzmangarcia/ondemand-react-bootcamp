import { useContext, useState } from "react"
import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider'

export default function ProductDescription({item, name, price, sku, categoryName, tags, description, specs, stock, uniqueId }) {


    const { cartItems, setCartItems } = useContext(CartItemsContext);
    const [numberOfItems, setNumberOfItems] = useState(1);

    function addItemToCard() {
        let totalElements = parseInt(numberOfItems, 10);
        let elements = cartItems;
        let cartItem = cartItems.find((item) => item.uniqueId === uniqueId);
        if (cartItem !== undefined) {
            totalElements += cartItem.quantity;
            elements = cartItems.filter((item) => item.uniqueId !== uniqueId);
        }
        else {
            cartItem = {
                uniqueId: uniqueId,
                quantity: 0,
                item:{...item,name, price, sku, categoryName, tags, description, specs, stock, uniqueId }
            }
        }
        if (totalElements > stock) {
            setTimeout(() => {
                alert('not enough stock');
            }, 100);
            return;
        }
        else {
            cartItem.quantity=totalElements;
        }


        setCartItems([...elements, cartItem])
    }

    return (
        <div>
            <p><label><b>Name: </b>{name}</label></p>
            <p><label><b>Price:</b> {price}</label></p>
            <p><label><b>SKU:</b> {sku}</label></p>
            <p><label><b>Category:</b> {categoryName}</label></p>
            <p><label><b>Tags:</b> {tags.map((tag, id) => { return (<label key={id}>{tag} </label>) })}</label></p>
            <p><label><b>Description:</b> <br /><br /> {description}</label></p>
            <div>
                <b>Qty:</b>
                <input type={'number'} defaultValue={1} onChange={(e)=>{ setNumberOfItems(e.target.value)}} />
                <button onClick={() => { addItemToCard() }} >Add to cart</button>
            </div>
            <p>Stock:{stock}</p>
            <div><p><b>Specs:</b></p>
                <ul>
                    {specs.map((spec, index) => { return (<li key={index}><b>{spec.spec_name}</b>: {spec.spec_value}</li>) })}
                </ul>
            </div>
        </div>


    )



}