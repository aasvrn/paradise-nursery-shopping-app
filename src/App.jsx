import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { lazy, Suspense } from 'react';

const Landing = lazy(() => import('./pages/Landing'));
const Products = lazy(() => import('./pages/Products'));
const Cart = lazy(() => import('./pages/Cart'));

export default function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div style={{ padding: 20 }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </div>
  );
}
