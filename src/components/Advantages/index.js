import "./style.scss";
import trolley from "./icons/trolley.svg";
import chess from "./icons/chess.svg";
import discount from "./icons/discount.svg";

const Advantages = () => {
  return `
    <div class = "advantages">
      <div class = "feature">
        <img src=${trolley} alt = "not found">
        <p><strong>Free shipping</strong> across Kyiv and Odesa — minimum 3 products</p>
        <a href="#">How to get one?</a>
      </div>
      <div class = "feature">
        <img src=${chess} alt = "not found">
        <p><strong>Individual discounts</strong> when ordering from 3 pr.</p>
        <a href="#">Check conditions</a>
      </div>
      <div class = "feature">
        <img src=${discount} alt = "not found">
        <p><strong>Special conditions</strong> apply for legal entities</p>
        <a href="#">Learn more</a>
      </div>
    </div>
  `;
};

export default Advantages;
