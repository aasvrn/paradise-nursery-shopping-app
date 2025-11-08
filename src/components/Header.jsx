import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalCount } from '../store/cartSlice';

export default function Header() {
  const count = useSelector(selectTotalCount);

  return (
    <header style={styles.header}>
      <Link to="/" style={styles.brand}>
        Paradise Nursery
      </Link>
      <nav style={styles.nav}>
        <NavLink to="/products" style={styles.link}>
          Products
        </NavLink>
        <NavLink to="/cart" style={styles.link}>
          <span role="img" aria-label="cart">🛒</span> {count}
        </NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 20px',
    borderBottom: '1px solid #eee',
    position: 'sticky',
    top: 0,
    background: '#fff',
    zIndex: 10,
  },
  brand: {
    fontWeight: 700,
    fontSize: '18px',
    textDecoration: 'none',
    color: '#2d6a4f',
  },
  nav: { display: 'flex', gap: '16px' },
  link: { textDecoration: 'none', color: '#333' },
};