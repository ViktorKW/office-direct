import "./style.scss";
import Selectors from "./components/Selectors";
import Products from "./components/Products";
const Catalog = () => {
  return `
    <div class = "catalog">
      <h1>Chair's catalog</h1>
      ${Selectors()}
      ${Products()}
    </div>
  `;
};

export default Catalog;
