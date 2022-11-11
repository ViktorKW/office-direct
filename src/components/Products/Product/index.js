import React from 'react';
import './style.scss';

const Product = ({ name, current_price, full_price, picture }) => {
  return (
    <div className='product'>
      <img src={picture} alt='product' />
      <div className='info'>
        <name>${name}</name>
        <price>${current_price} UAH</price>
        <fullprice>${full_price} UAH</fullprice>
      </div>
      <button className='blue-btn'>Add to cart</button>
    </div>
  );
};

export default Product;
