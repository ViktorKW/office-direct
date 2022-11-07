import "./style.scss";
import Selectors from "../Selectors";
import Products from "../Products";
import Advantages from "../Advantages";
const Catalog = () => {
  return `
    <div class = "catalog">
      ${Advantages()}
      <h1>Chair's catalog</h1>
      ${Selectors()}
      ${Products()}
      <a type = "button" href = "/catalog" data-link class = "grey-btn">Show more</a>
    </div>
  `;
};

export default Catalog;
