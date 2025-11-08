import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();
  const inCart = useSelector((state) => Boolean(state.cart.items[plant.id]));

  return (
    <div style={styles.card}>
      <img src={plant.image} alt={plant.name} style={styles.img} />
      <div style={styles.info}>
        <div style={styles.name}>{plant.name}</div>
        <div style={styles.price}>${plant.price.toFixed(2)}</div>
      </div>
      <button
        onClick={() => dispatch(addItem(plant))}
        disabled={inCart}
        style={styles.button}
      >
        {inCart ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #eee',
    borderRadius: 8,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  img: { width: '100%', height: 160, objectFit: 'cover' },
  info: { padding: '10px 12px', display: 'flex', justifyContent: 'space-between' },
  name: { fontWeight: 600 },
  price: { color: '#2d6a4f' },
  button: {
    padding: '10px 12px',
    margin: 12,
    borderRadius: 6,
    border: '1px solid #2d6a4f',
    background: '#2d6a4f',
    color: '#fff',
    cursor: 'pointer',
  },
};