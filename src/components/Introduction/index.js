import "./style.scss";
import big_chair from "./images/big_chair.svg";
import small_chair from "./images/small_chair.svg";

const Introduction = () => {
  return `
    <div class = "introduction">
      <div class = "info">
        <h1>Armchairs Samurai on favorable terms <u>throughout the country</u></h1>
        <p>
          Here you do not have to blindly buy goods - test before buying
        </p>
        <button class = "blue-btn">
        Sign up for a test drive</button>
      </div>
      <img src = "${big_chair}"/>
      <img src = "${small_chair}"/>
    </div>
  `;
};

export default Introduction;
