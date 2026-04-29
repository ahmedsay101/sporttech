import { useState } from 'react';
import './Products.css';

const categories = ['All', 'Treadmills', 'Bikes', 'Strength', 'Accessories'];

const products = [
  {
    id: 1,
    category: 'Treadmills',
    name: 'ProRun X9 Elite',
    price: 'EGP 45,000',
    badge: 'Best Seller',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=80',
    specs: ['22 km/h Max Speed', '22" HD Touchscreen', '0–15% Incline', '4.0 CHP Motor'],
  },
  {
    id: 2,
    category: 'Treadmills',
    name: 'CardioMax 5000',
    price: 'EGP 32,000',
    badge: 'New',
    img: 'https://images.unsplash.com/photo-1632659980074-1c3d2cedb898?w=600&auto=format&fit=crop&q=80',
    specs: ['20 km/h Max Speed', '15" Smart Screen', '0–12% Incline', '3.5 CHP Motor'],
  },
  {
    id: 3,
    category: 'Treadmills',
    name: 'SpeedForce Commercial',
    price: 'EGP 68,000',
    badge: 'Commercial',
    img: 'https://images.unsplash.com/photo-1520391727445-b4bec8e53d47?w=600&auto=format&fit=crop&q=80',
    specs: ['24 km/h Max Speed', 'Dual-User Profiles', '0–15% Incline', '5.0 CHP Motor'],
  },
  {
    id: 4,
    category: 'Treadmills',
    name: 'FoldFit Compact',
    price: 'EGP 18,500',
    badge: 'Budget Pick',
    img: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=600&auto=format&fit=crop&q=80',
    specs: ['16 km/h Max Speed', '7" LCD Display', 'Foldable Design', '2.5 CHP Motor'],
  },
  {
    id: 5,
    category: 'Bikes',
    name: 'SpinPro Indoor Cycle',
    price: 'EGP 22,000',
    badge: 'Popular',
    img: 'https://images.unsplash.com/photo-1530143206958-c9baf1e30c0e?w=600&auto=format&fit=crop&q=80',
    specs: ['Magnetic Resistance', 'LCD Heart Monitor', 'Adjustable Seat', 'Heavy Flywheel'],
  },
  {
    id: 6,
    category: 'Strength',
    name: 'PowerRack Pro Station',
    price: 'EGP 38,000',
    badge: 'Commercial',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80',
    specs: ['Multi-Function', '500 kg Capacity', 'Steel Frame', 'Cable & Pulley'],
  },
];

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? products
    : products.filter(p => p.category === active);

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">OUR EQUIPMENT</span>
          <h2 className="section-title">
            Premium <span className="text-red">Gym Equipment</span>
          </h2>
          <p className="section-desc">
            From commercial treadmills to full strength stations — built to last, designed to perform.
          </p>
        </div>

        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-img-wrap">
                <img src={product.img} alt={product.name} />
                {product.badge && <span className="badge">{product.badge}</span>}
              </div>
              <div className="product-body">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <ul className="product-specs">
                  {product.specs.map(spec => (
                    <li key={spec}><span className="check">✓</span>{spec}</li>
                  ))}
                </ul>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <a href="#contact" className="btn-primary-sm">Inquire Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
