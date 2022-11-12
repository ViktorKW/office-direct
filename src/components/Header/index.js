import React from 'react';
import './style.scss';
import cellPhone from '../../assets/icons/cellPhone.svg';
import send from '../../assets/icons/send.svg';
import cart from '../../assets/icons/cart.svg';
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='header__main'>
          <div className='logo'>
            <span className='logo__beggining'>Office</span>
            <span className='logo__end'>Direct</span>
          </div>
          <input type='text' placeholder='Search...' className='input' />
          <div className='phone'>
            <img src={cellPhone} alt='cellphone-icon' />
            +38(095)555-55-55
          </div>
          <button type='button' className='button'>
            Request a call
          </button>
        </div>
        <div className='header__menu'>
          <div className='header__menu-main'>
            <div className='button'>
              <span className='material-symbols-outlined'>sort</span>
              <button type='button' className='button__catalogue'>
                Catalogue
              </button>
            </div>
            <nav className='header__nav'>
            <Link to="/cart" className="nav-link">About the products</Link>
            <Link to="/cart" className="nav-link">Testimonials</Link>
            <Link to="/cart" className="nav-link">Delivery & payment</Link>
            <Link to="/cart" className="nav-link">Contacts</Link>
            </nav>
          </div>
          <div className='header__menu-additional'>
            <div className='location'>
              <img src={send} alt='send icon' />
              <select name='city' id='city'>
                <option value='kyiv' selected>
                  Kyiv
                </option>
                <option value='london'>London</option>
                <option value='berlin'>Berlin</option>
              </select>
            </div>
            <div className='cart'>
              <img src={cart} alt='cart icon' />
              <Link to="/cart" className="nav-link">My orders</Link>
              <span className='quantity'>+1</span>
            </div>
          </div>
        </div>
      </header>
      <Outlet/>
    </>
  );
  
};

export default Header;

// const Header = () => {
//   const menu = ['home', 'about', 'contact us'];

//   const nav = menu
//     .map((item, i) => {
//       const href = item === 'home' ? '/' : `/${item}`;
//       return `
//         <a href=${href} data-link>
//           ${item}
//         </a>
//       `;
//     })
//     .join('');

//   return `
//     <header class="header">
//       <h2>Office Direct</h2>
//       <ul class="nav">
//         ${nav}
//       </ul>
//     </header>
//   `;
// };
