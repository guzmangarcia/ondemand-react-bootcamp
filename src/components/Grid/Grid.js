import styles from './Grid.module.scss'

export default function Grid({ data }) {

    return (
        <div style={{ 'overflow-x': 'auto' }}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <th className={styles.hidden}>UniqueId</th>
                        <th className={styles.thtd}>Product</th>
                        <th className={styles.thtd}>Quantity</th>
    
                        <th className={styles.thtd}>Image</th>

                        <th className={styles.thtd}>Price/Unit</th>
                        <th className={styles.thtd}>Subtotal</th>
                        <th className={styles.thtd}>X</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((itemData) => {
                        return (
                            <tr className={styles.tr} key={itemData.uniqueId}>
                                <td className={styles.hidden}>{itemData.uniqueId}</td>
                                <td className={styles.thtd}>{itemData.item.name}</td>
                                <td className={styles.thtd}>
                                    <button>-</button>
                                    <input value={itemData.quantity} />
                                    <button>+</button>
                                </td>
                                <td className={styles.thtd}> <img src={itemData.item.src} alt={itemData.item.alt} className={styles.image} /> </td>
                           
                                <td className={styles.thtd}>{itemData.item.price}</td>
                                <td className={styles.thtd}>{itemData.item.price*itemData.quantity}</td>
                                <td className={styles.thtd}><button>X</button></td>
                            </tr>)
                    }
                    )}
                </tbody>
            </table>
        </div>
    );




}