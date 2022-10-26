import "./style.scss";
import Product from "./Product";
import chair1 from "./images/chair1.svg";
import chair2 from "./images/chair2.svg";
const Products = () => {
  const products_db = [
    {
      name: "Samurai KL-1.04 dark-brown",
      current_price: 25000,
      full_price: 37000,
      picture: chair1,
    },
    {
      name: "Samurai KL-1.04 dark-brown",
      current_price: 25000,
      full_price: 37000,
      picture: chair2,
    },
    {
      name: "Samurai KL-1.04 dark-brown",
      current_price: 25000,
      full_price: 37000,
      picture: chair2,
    },
    {
      name: "Samurai KL-1.04 dark-brown",
      current_price: 25000,
      full_price: 37000,
      picture: chair2,
    },
    {
      name: "Samurai KL-1.04 dark-brown",
      current_price: 25000,
      full_price: 37000,
      picture: chair2,
    },
    {
      name: "Samurai KL-1.04 dark-brown",
      current_price: 25000,
      full_price: 37000,
      picture: chair2,
    },
    {
      name: "Samurai KL-1.04 dark-brown",
      current_price: 25000,
      full_price: 37000,
      picture: chair2,
    },
    {
      name: "Samurai KL-1.04 dark-brown",
      current_price: 25000,
      full_price: 37000,
      picture: chair2,
    },
  ];

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
