import "./style.scss";

const Product = ({ name, current_price, full_price, picture }) => {
  return `
  <div class = "product">
    <img src = "${picture}"/>
    <div class = "info">
      <name>${name}</name>
      <price>${current_price} UAH</price>
      <fullprice>${full_price} UAH</fullprice>
    </div>
    <a type = "button" data-link href = "/product" class = "blue-btn">Add to cart</a>
  </div>`;
};

export default Product;
