import React from 'react';
import './style.scss';

const Product = ({ name, current_price, full_price, picture }) => {
  return (
    <div className='product'>
      <img src={picture} alt='product' />
      <div className='product-info'>
        <p className='product-name'>${name}</p>
        <p className='product-price'>${current_price} UAH</p>
        <p className='product-full-price'>${full_price} UAH</p>
      </div>
      <button className='blue-btn'>Add to cart</button>
    </div>
  );
};

export default Product;
