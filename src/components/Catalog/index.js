import "./style.scss";
import Selectors from "./components/Selectors";
const Catalog = () => {
  return `
    <div class = "catalog">
      <h1>Chair's catalog</h1>
      ${Selectors()}
    </div>
  `;
};

export default Catalog;
