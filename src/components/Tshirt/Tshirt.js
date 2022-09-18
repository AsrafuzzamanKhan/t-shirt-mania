import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tShirt, handleAddCart }) => {
  const { name, picture, price } = tShirt;
  return (
    <div className="card-container">
      <img src={picture} alt="" />
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={() => handleAddCart(tShirt)}>Add To Cart</button>
    </div>
  );
};

export default Tshirt;
