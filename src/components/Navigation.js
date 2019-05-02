import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/service">Service</Link>
      <Link to="/article">Article</Link>
      <Link to="/contact">Contact Us</Link>
    </div>
  )
}

export default Navigation;