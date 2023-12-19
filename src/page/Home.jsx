import React, { memo } from 'react';
import "./home.css";

const products = [
  { id: 1, name: 'Product 1', price: 10, image: "./src/images/nikeswara.png" },
  { id: 2, name: 'Product 2', price: 20, image: "./src/images/jordan.png" },
  { id: 2, name: 'Product 3', price: 20, image: "./src/images/airman.png" },
  { id: 2, name: 'Product 4', price: 20, image: "./src/images/nickeflox.png" }
  

  // Add more products as needed
];

function Home() {
  return (
    <div className="products-container">
      <h1>Welcome to our E-commerce Store!</h1>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            {/* You can add more product details here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Home);
