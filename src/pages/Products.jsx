import ProductCard from '../components/ProductCard';
import { plants, categories } from '../data/plants';

export default function Products() {
  return (
    <div style={styles.container}>
      {categories.map((cat) => (
        <section key={cat} style={styles.section}>
          <h2 style={styles.heading}>{cat}</h2>
          <div style={styles.grid}>
            {plants
              .filter((p) => p.category === cat)
              .map((p) => (
                <ProductCard key={p.id} plant={p} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: '20px' },
  section: { marginBottom: 24 },
  heading: { marginBottom: 12 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: 16,
  },
};