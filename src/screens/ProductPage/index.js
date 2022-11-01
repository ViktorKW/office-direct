import "./style.scss";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import Selectors from "../../components/Selectors";
import Products from "../../components/Products";

const ProductPage = () => {
  return ` 
  <div class = "product-page">
    ${Header()}
    <div class = "content">
      <p class = "nav-history"><a href="#" class ="previous">Home</a> >  <a href="#" class ="previous">Catalog</a> <a class ="current">> PRODUCT NAME</a>
      </p>
      
      <div class = "page-info">
        <h1>Armchairs catalog</h1>
        <select>
          <option value="value1">Sort by highest price</option>
          <option value="value2">Значение 2</option>
          <option value="value3">Значение 3</option>
        </select>
      </div>

      ${Selectors()}
      ${Products()}
    </div>
    <canvas height="30px"></canvas>
    ${ContactUs()}
    ${Footer()}
  </div>`;
};

export default ProductPage;
