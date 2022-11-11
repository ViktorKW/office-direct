import React from 'react';
import './style.scss';
// import Selectors from '../Selectors';
// import Products from '../Products';
// import Advantages from '../Advantages';
const Catalog = () => {
  return (
    <div className='catalog'>
      {/* ${Advantages()}
      <h1>Chair's catalog</h1>${Selectors()}${Products()} */}
      <button className='grey-btn' onclick='onClickCatalog()'>
        Show more
      </button>
    </div>
  );
};

export default Catalog;
