import "./style.scss";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Selectors from "../../components/Selectors";
import Products from "../../components/Products";

const CatalogPage = () => {
  return `
    <div class = "catalog-page">
      ${Header()}
      ${Selectors()}
      ${Products()}
      ${ContactUs()}
      ${Footer()}
    </div>`;
};

export default CatalogPage;
