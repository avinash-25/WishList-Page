import React, { useState } from 'react';
import './Wishlist.css';

const Wishlist = ({ products }) => {
  const [wishlist, setWishlist] = useState([]);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const addToWishlist = (product) => {
    if (!wishlist.includes(product)) {
      setWishlist([...wishlist, product]);
      setAddedToWishlist(true);
      setTimeout(() => {
        setAddedToWishlist(false);
      }, 2000);
    }
  };

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((item) => item !== product);
    setWishlist(updatedWishlist);
  };

  return (
    <>
      <div className="wishlist-container">
        <h1>My Wishlist</h1>
        {addedToWishlist && (
          <div className="added-message">
            <p>Added to wishlist!</p>
          </div>
        )}
        <div className="products-container">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
            </div>
          ))}
        </div>
        <div className="wishlist-items">
          <h2>Your wishlist is here:</h2>
          <ul>
            {wishlist.map((item, index) => (
              <li key={index}>
                {item.name}
                <button onClick={() => removeFromWishlist(item)}>Remove from Wishlist</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
