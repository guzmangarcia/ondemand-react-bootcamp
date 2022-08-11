import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { CartItemsContext } from '../CartItemsContextProvider/CartItemsContextProvider';
import ShowError from '../ShowError/ShowError';

export default function ProductDescription({
  item, name, price, sku, categoryName, tags, description, specs, stock, uniqueId,
}) {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [message, setMessage] = useState('');

  function addItemToCard() {
    let totalElements = parseInt(numberOfItems, 10);
    let elements = cartItems;
    let cartItem = cartItems.find((itemToFind) => itemToFind.uniqueId === uniqueId);

    if (cartItem !== undefined) {
      totalElements += cartItem.quantity;
      elements = cartItems.filter((itemToModify) => itemToModify.uniqueId !== uniqueId);
    } else {
      cartItem = {
        uniqueId,
        quantity: 0,
        item: {
          ...item, name, price, sku, categoryName, tags, description, specs, stock, uniqueId,
        },
      };
    }
    if (totalElements > stock) {
      setMessage('NOT ENOUGH STOCK');
      return;
    }
    cartItem.quantity = totalElements;

    setCartItems([...elements, cartItem]);
  }

  return (

    <div>
      <ShowError message={message} setMessage={setMessage} />
      <p>
        <label htmlFor={name}>
          <b>Name: </b>
          {name}
        </label>
      </p>
      <p>
        <label htmlFor={price}>
          <b>Price:</b>
          {' '}
          {price}
        </label>
      </p>
      <p>
        <label htmlFor={sku}>
          <b>SKU:</b>
          {' '}
          {sku}
        </label>
      </p>
      <p>
        <label htmlFor={categoryName}>
          <b>Category:</b>
          {' '}
          {categoryName}
        </label>
      </p>
      <p>
        <label htmlFor={tags}>
          <b>Tags:</b>
          {' '}
          {tags.map((tag) => (
            <label key={tag} htmlFor={tag}>
              {tag}
              {' '}
            </label>
          ))}
        </label>
      </p>
      <p>
        <label htmlFor={description}>
          <b>Description:</b>
          {' '}
          <br />
          <br />
          {' '}
          {description}
        </label>
      </p>
      <div>
        <b>Qty:</b>
        <input type="number" defaultValue={1} onChange={(e) => { setNumberOfItems(e.target.value); }} />
        <button type="button" onClick={addItemToCard}>Add to cart</button>
      </div>
      <p>
        Stock:
        {stock}
      </p>
      <div>
        <p><b>Specs:</b></p>
        <ul>
          {specs.map((spec, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <b>{spec.spec_name}</b>
              :
              {' '}
              {spec.spec_value}
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

ProductDescription.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,

  }).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  sku: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  description: PropTypes.string.isRequired,
  specs: PropTypes.arrayOf(

    PropTypes.shape({
      spec_name: PropTypes.string.isRequired,
      spec_value: PropTypes.string.isRequired,
    }),

  ).isRequired,
  stock: PropTypes.number.isRequired,
  uniqueId: PropTypes.string.isRequired,
};
