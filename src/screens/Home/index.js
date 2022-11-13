import React from 'react';
import Advantages from '../../components/Advantages';
import Selectors from '../../components/Selectors';
import Products from '../../components/Products';
import Introduction from '../../components/Introduction';
import SamuraiLady from '../../components/SamuraiLady';
import Description from '../../components/Description';
import Clients from '../../components/Clients';
import ContactUs from '../../components/ContactUs';
import Footer from '../../components/footer';
import './style.scss';

const Home = () => {
  return (
    <div className='home-page'>
      <Introduction />
      <div className='catalog'>
        <Advantages />
        <h1>Chair's catalog</h1>
        <Selectors />
        <Products />
        <button className='grey-btn'>Show more</button>
      </div>
      <Description />
      <SamuraiLady />
      <Clients />

      <canvas style={{ height: '200px' }}></canvas>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;

// ${Header()}${Introduction()}${Catalog()}${Description()}${SamuraiLady()}$
// {Clients()}${ContactUs()}${Footer()}
