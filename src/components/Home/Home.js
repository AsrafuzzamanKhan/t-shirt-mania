import React, { useState } from 'react';
import useTshirt from '../../hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
const Home = () => {
  const [cart, setCart] = useState([]);
  const [tShirts, setTShirts] = useTshirt();

  const handleAddCart = (tShirt) => {
    const exists = cart.find((pd) => pd._id === tShirt._id);
    if (!exists) {
      const newCart = [...cart, tShirt];
      setCart(newCart);
    } else {
      alert('asche');
    }
  };
  const handleRemoveFromCart = (selectedItem) => {
    const restCart = cart.filter((pd) => pd._id !== selectedItem._id);
    setCart(restCart);
  };
  return (
    <div className="home-container">
      <div className="tShirt-container">
        {tShirts.map((tShirt) => (
          <Tshirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddCart={handleAddCart}
          ></Tshirt>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
