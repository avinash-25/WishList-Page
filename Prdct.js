import React from 'react';
import Wishlist from './Wishlist';

function Prdct() {
  // Sample product data
  const products = [
    {
      img: './SlidesPic/pic2.jpg',
      name: 'Product 1',
      description: 'Description for Product 1'
    },
    {
      img: './SlidesPic/pic1.jpg',
      name: 'Product 2',
      description: 'Description for Product 2'
    },
    {
      img: './SlidesPic/pic3.jpg',
      name: 'Product 3',
      description: 'Description for Product 3'
    },
  ];

  return (
    <div className="App">
      <Wishlist products={products} />
    </div>
  );
}

export default Prdct;
