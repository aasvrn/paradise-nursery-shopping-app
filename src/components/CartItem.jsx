import { useDispatch } from 'react-redux';
import { increment, decrement, removeItem } from '../store/cartSlice';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const totalForType = (item.quantity * item.price).toFixed(2);

  return (
    <div style={styles.row}>
      <img src={item.image} alt={item.name} style={styles.thumb} />
      <div style={styles.grow}>
        <div style={styles.name}>{item.name}</div>
        <div>Unit: ${item.price.toFixed(2)} | Total: ${totalForType}</div>
      </div>
      <div style={styles.controls}>
        <button style={styles.controlBtn} onClick={() => dispatch(decrement(item.id))}>-</button>
        <span style={styles.qty}>{item.quantity}</span>
        <button style={styles.controlBtn} onClick={() => dispatch(increment(item.id))}>+</button>
      </div>
      <button style={styles.deleteBtn} onClick={() => dispatch(removeItem(item.id))}>Delete</button>
    </div>
  );
}

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 0',
    borderBottom: '1px solid #eee',
  },
  thumb: { width: 80, height: 80, objectFit: 'cover', borderRadius: 6 },
  grow: { flex: 1 },
  name: { fontWeight: 600 },
  controls: { display: 'flex', alignItems: 'center', gap: 8 },
  qty: { minWidth: 24, textAlign: 'center' },
  controlBtn: { padding: '6px 10px' },
  deleteBtn: {
    padding: '6px 10px',
    background: '#b00020',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
  },
};