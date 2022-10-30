import "./style.scss";
import Header from "../../components/Header";
import Footer from "../../components/footer";
import BasketPreview from "../../components/basketPreview";
// ${Header()}
const Basket = () => {
  return `
    <div class = "basketContainer">
      ${BasketPreview()}
      ${Footer()}
    </div>
  `;
};

export default Basket;
