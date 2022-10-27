import './style.scss';
import cellPhone from '../../assets/icons/cellPhone.svg';
import send from '../../assets/icons/send.svg';
import cart from '../../assets/icons/cart.svg';

const Header = () => {
  return `
    <header class="header">
      <div class="header__main">
        <div class="logo"><span class="logo__beggining">Office</span><span class="logo__end">Direct</span></div>
        <input type="text" placeholder="Search..." class="input">
        <div class="phone"><img src='${cellPhone}' alt="cellphone-icon" />+38(095)555-55-55</div>
        <button type="button" class="button">Request a call</button>
      </div>
      <div class="header__menu">
        <div class="header__menu-main">
          <div class="button">
            <span class="material-symbols-outlined">
              sort
            </span>
            <button type="button" class="button__catalogue">Catalogue</button>
          </div>
          <nav class="header__nav">
            <a href="#">About the products</a>
            <a href="#">Testimonials</a>
            <a href="#">Delivery & payment</a>
            <a href="#">Contacts</a>
          </nav>
        </div>
        <div class="header__menu-additional">
          <div class="location">
            <img src='${send}' alt="send icon" />
            <select name="city" id="city">
              <option value="kyiv" selected>Kyiv</option>
              <option value="london">London</option>
              <option value="berlin">Berlin</option>
            </select>
          </div>
          <div class="cart">
            <img src='${cart}' alt="cart icon" />
            <p>My orders</p>
            <span class="quantity">+1</span>
          </div>
        </div>
      </div>
    </header>
  `;
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
