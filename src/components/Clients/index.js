import React from 'react';
import Comments from './components/Comments';
import Partners from './components/Partners';

import './style.scss';

const Clients = () => {
  return (
    <div className='clients-container'>
      <Partners />
      <Comments />
    </div>
  );
};

export default Clients;
