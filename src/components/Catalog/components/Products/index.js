import "./style.scss";
import Product from "./Product";
import products_db from "../../../../assets/products.json";

const Products = () => {
  function drawProducts(db) {
    console.log(db);
    const result = db.map((element) => Product(element));
    console.log(result.join(","));
    return result.join(" ");
  }

  return `
    <div class = "content">
      <div class="products">
        ${drawProducts(products_db)}
      </div>
      <button class = "grey-btn">Show more</button>
    </div>
  `;
};

export default Products;
