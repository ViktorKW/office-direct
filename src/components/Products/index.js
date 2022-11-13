import React from 'react';
import './style.scss';
import Product from './Product';
import products_db from '../../assets/products.json';

const Products = () => {
  return (
    <div className='products'>
      {products_db.slice(0, 8).map((element) => (
        <Product key={element.id} {...element} />
      ))}
    </div>
  );
};
// const Products = () => {
//   function drawProducts(db) {
//     const result = db.slice(0, 8).map((element) => Product(element));
//     console.log(result.join(","));
//     return result.join(" ");
//   }

//   return `
//       <div class="products">
//         ${drawProducts(products_db)}
//       </div>
//   `;
// };

export default Products;
