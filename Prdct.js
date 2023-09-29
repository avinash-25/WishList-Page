import React from 'react';
// import './App.css';
import Wishlist from './Wishlist';

function Prdct() {
  // Sample product data
  const products = [
    { name: 'Product 1', description: 'Description for Product 1' },
    { name: 'Product 2', description: 'Description for Product 2' },
    { name: 'Product 3', description: 'Description for Product 3' },
  ];

  return (
    <div className="App">
      <Wishlist products={products} />
    </div>
  );
}

export default Prdct;
