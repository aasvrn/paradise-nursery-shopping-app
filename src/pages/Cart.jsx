import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { selectCartItemsArray, selectTotalCount, selectTotalCost } from '../store/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const items = useSelector(selectCartItemsArray);
  const count = useSelector(selectTotalCount);
  const cost = useSelector(selectTotalCost);

  return (
    <div style={styles.container}>
      <h2>Shopping Cart</h2>
      <div style={styles.summary}>
        <div>Total plants: {count}</div>
        <div>Total cost: ${cost.toFixed(2)}</div>
      </div>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <div style={styles.actions}>
        <Link to="/products" style={styles.continue}>Continue Shopping</Link>
        <button style={styles.checkout} onClick={() => alert('Checkout: Coming Soon')}>Checkout</button>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: 20 },
  summary: { display: 'flex', gap: 20, marginBottom: 12 },
  actions: { display: 'flex', gap: 12, marginTop: 20 },
  continue: {
    textDecoration: 'none',
    background: '#eee',
    padding: '8px 12px',
    borderRadius: 6,
    color: '#333',
  },
  checkout: {
    background: '#2d6a4f',
    color: '#fff',
    border: 'none',
    padding: '10px 14px',
    borderRadius: 6,
  },
};