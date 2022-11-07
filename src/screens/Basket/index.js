import "./style.scss";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import BasketPreview from "../../components/basketPreview";

const Basket = () => {
  return `
    <div class = "basketContainer">
      ${Header()}
      ${BasketPreview()}
      ${Footer()}
    </div>
  `;
};


export default Basket;