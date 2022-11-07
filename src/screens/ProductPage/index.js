import "./style.scss";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Selectors from "../../components/Selectors";
import Products from "../../components/Products";

import black_chair from "./images/black-chair.svg";
import blue_chair from "./images/blue-chair.svg";
import green_chair from "./images/green-chair.svg";
import red_chair from "./images/red-chair.svg";

import chair from "./images/chair.svg";

import selected_highlight from "./images/selected-highlight.svg";

import chair_highlight_2 from "./images/chair-highlight-2.svg";
import chair_highlight_3 from "./images/chair-highlight-3.svg";
import chair_highlight_4 from "./images/chair-highlight-4.svg";

import cart from "./images/cart.svg";

const ProductPage = () => {
  const gallery = `
  <div class="gallery">
    <img class = "main-picture" src = "${chair}"/>
    <div class = "picture-highlights">
      <img src = "${selected_highlight}
      "/>

      <img src = "${chair_highlight_2}
      "/>

      <img src = "${chair_highlight_3}
      "/>

      <img src = "${chair_highlight_4}
      "/>
    </div>
  </div>`;

  const item_description = `
  <div class = "item-description">
    <h1>PRODUCT NAME plus second string</h1>
    <p class = "text-description">
      Ergonomic office chair with synchro mechanism of rocking "MultiBlock" - separate synchronous deflection of the back and seat of the chair.
    </p>
    <label>CHOSEN COLOR</label>
    <div class ="color-images">
      <img src = "${black_chair}"/>
      <img src = "${blue_chair}"/>
      <img src = "${red_chair}"/>
      <img src = "${green_chair}"/>
    </div>
    <label>Mechanism</label>
    <p class = "text-description">
      Ergonomic office chair with synchro mechanism of rocking "MultiBlock" - separate synchronous deflection of the back and seat of the chair.
    </p>
    <p class = "full-price">27000$</p>
    <p class = "discounted-price">22700$</p>

    <div class ="purchase-container">
      <button class = "blue-btn btn-img"><img src="${cart}"/>Add to cart</button>
    </div>
  </div>
  `;

  const nav_history = `
  <p class = "nav-history">
    <a href="#" class ="previous">Home</a> >  <a href="#" class ="previous">Catalog</a> <a class ="current">> PRODUCT NAME</a>
  </p>`;

  const empty_space = `
  <canvas height="30px">
  </canvas>`;

  return ` 
  <div class = "product-page">
    ${Header()}
    <div class = "content">
      ${empty_space}
      ${nav_history}

      <div class = "product-description">
        ${gallery}
        ${item_description}
      </div>

      <div class = "product-description-bottom">
        <div class ="left-text">
          <h1>
            Product description
          </h1>

          <p>
            Here will be in more detail the key. We have showrooms in Moscow and St. Petersburg, where we are always happy. Dat professional advice and exchange of expertise. We have showrooms in Moscow and St. Petersburg, where we are always glad to see you.
          </p>
          
          <div class = "expand">Expand <strong>˅</strong></div>
        </div>

        <div class = "right-text">
          <h1>Parameters</h1>

          <ol>
            <li class = "param"><left>Chair hight</left> <right>1170 — 1230 mm
            </right></li>
            <li class = "param"><left>Chair hight</left> <right>1170 — 1230 mm
            </right></li>
            <li class = "param"><left>Chair hight</left> <right>1170 — 1230 mm
            </right></li>
            <li class = "param"><left>Chair hight</left> <right>1170 — 1230 mm
            </right></li>
          </ol>

          <div class = "expand">Expand <strong>˅</strong></div>
        </div>
      </div>
      ${empty_space}
      <hr/>
      ${empty_space}

      ${Selectors()}
      ${Products()}
    </div>

    ${empty_space}
    ${ContactUs()}
    ${Footer()}
  </div>`;
};

export default ProductPage;
