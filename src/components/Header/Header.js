import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <h2>Welcome to T-shirt Mania</h2>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/orderReview">OrderReview</Link>
      </nav>
    </div>
  );
};

export default Header;