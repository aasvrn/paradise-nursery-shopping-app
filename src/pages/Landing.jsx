import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Paradise Nursery</h1>
        <p style={styles.text}>
          We curate aromatic, medicinal, and succulent houseplants to bring
          calm and wellness into your home. Explore our collection and grow a
          little paradise indoors.
        </p>
        <Link to="/products" style={styles.cta}>Get Started</Link>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: 'calc(100vh - 60px)',
    backgroundImage:
      "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=50&w=1600&auto=format&fit=crop')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    background: 'rgba(255,255,255,0.88)',
    padding: '32px 28px',
    borderRadius: 12,
    maxWidth: 720,
    textAlign: 'center',
  },
  title: { margin: 0, color: '#2d6a4f' },
  text: { fontSize: 16 },
  cta: {
    display: 'inline-block',
    marginTop: 16,
    padding: '10px 16px',
    borderRadius: 6,
    background: '#2d6a4f',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 600,
  },
};