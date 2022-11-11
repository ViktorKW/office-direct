import React from 'react';
import Header from '../../components/Header';
import Advantages from '../../components/Advantages';
import Selectors from '../../components/Selectors';
import Products from '../../components/Products';
import './style.scss';

// import Introduction from '../../components/Introduction';
// import SamuraiLady from '../../components/SamuraiLady';
// import Description from '../../components/Description';
// import Clients from '../../components/Clients';
// import ContactUs from '../../components/ContactUs';
// import Footer from '../../components/footer';

const Home = () => {
  return (
    <div className='home-page'>
      <Header />
      <div className='catalog'>
        <Advantages />
        <h1>Chair's catalog</h1>
        <Selectors />
        <Products />
        <button className='grey-btn'>Show more</button>
      </div>
    </div>
  );
};

export default Home;

// ${Header()}${Introduction()}${Catalog()}${Description()}${SamuraiLady()}$
// {Clients()}${ContactUs()}${Footer()}
