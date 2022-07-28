import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Grid.module.scss';

export default function Grid({ data, setData, editable }) {
  const navigate = useNavigate();
  const [totalPrice, settotalPrice] = useState(0);
  const [dataAux, setDataAux] = useState([]);

  useEffect(() => {
    let totalPriceAux = 0;
    setDataAux(data.map((itemData) => {
      const itemDataQuantity = [];
      for (let id = 1; id <= itemData.item.stock; id++) {
        itemDataQuantity.push(id);
      }

      totalPriceAux += itemData.item.price * itemData.quantity;

      return {
        uniqueId: itemData.uniqueId,
        name: itemData.item.name,
        quantity: itemData.quantity,
        src: itemData.item.src,
        alt: itemData.item.alt,
        price: itemData.item.price,
        stock: itemData.item.stock,
        quantityItems: itemDataQuantity,
      };
    }));

    settotalPrice(totalPriceAux);
  }, [data]);

  function handleClick({ itemId, newValue }) {
    const cardItem = data.find((item) => itemId === item.uniqueId);
    const restItems = data.filter((item) => itemId !== item.uniqueId);

    cardItem.quantity = parseInt(newValue, 10);
    setData([cardItem, ...restItems]);
  }

  function removeItem({ itemId }) {
    const restItems = data.filter((item) => itemId !== item.uniqueId);
    setData(restItems);
  }

  return (
    <div style={{ overflowx: 'auto' }}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.hidden}>UniqueId</th>
            <th className={styles.thtd}>Product</th>
            <th className={styles.thtd}>Quantity</th>
            <th className={styles.thtd}>Image</th>
            <th className={styles.thtd}>Price/Unit</th>
            <th className={styles.thtd}>Subtotal</th>
            {editable && <th className={styles.thtd}>X</th>}
          </tr>
        </thead>
        <tbody>
          {dataAux.map((itemData) => (
            <tr className={styles.tr} key={itemData.uniqueId}>
              <td className={styles.hidden}>{itemData.uniqueId}</td>
              <td className={styles.thtd}>{itemData.name}</td>
              <td className={styles.thtd}>
                {editable
                  ? (
                    <select defaultValue={itemData.quantity} onChange={(e) => { handleClick({ itemId: itemData.uniqueId, newValue: e.currentTarget.value }); }}>
                      {itemData.quantityItems.map((item, index) => (<option key={itemData.uniqueId + index} value={item}>{item}</option>))}
                    </select>
                  )
                  : <p>{itemData.quantity}</p>}

              </td>
              <td className={styles.thtd}>
                {' '}
                <img src={itemData.src} alt={itemData.alt} className={styles.image} />
                {' '}
              </td>
              <td className={styles.thtd}>
                {itemData.price}
                $
              </td>
              <td className={styles.thtd}>
                {itemData.price * itemData.quantity}
                $
              </td>
              {editable && <td className={styles.thtd}><button type="button" onClick={() => { removeItem({ itemId: itemData.uniqueId }); }}>X</button></td>}
            </tr>
          ))}

        </tbody>
        <tfoot>
          <tr className={styles.tr}>
            <td className={styles.hidden} />
            <td className={styles.thtd}>{!editable && <button type="button" onClick={() => navigate('/cart')}>Go back to cart</button>}</td>
            <td className={styles.thtd} />
            <td className={styles.thtd} />
            <td className={styles.thtd}>Total price</td>
            <td className={styles.thtd}>
              {totalPrice}
              $
            </td>
            <td className={styles.thtd}>
              {
                editable ? <button type="button" onClick={() => navigate('/checkout')}>Proceed to checkout</button>
                  : <button type="button" onClick={(e) => { e.preventDefault(); }}>Place order</button>
              }
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
