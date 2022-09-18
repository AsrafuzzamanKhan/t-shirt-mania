import React from 'react';
import './Cart.css';
const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div>
      <h2>Cart:{cart.length}</h2>
      {cart.length !== 0 || <p>No Product</p>}
      {cart.map((tshirt) => (
        <p>
          {tshirt.name}
          {tshirt._id}
          <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
