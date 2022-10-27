import "./style.scss";
import samuraiLady from "./images/samuraiLady.svg";
const SamuraiLady = () => {
  return `
  <div class = "samurai-lady">
    <div class = "info">
      <h1>Armchairs Samurai on favorable terms <u>throughout the country</u></h1>
      <p>
        Here you do not have to blindly buy goods - test before buying. WE HAVE EVERYTHING!
      </p>
      <button class = "blue-btn">
      Sign up for a test drive</button>
    </div>
    <img src = "${samuraiLady}"/>
  </div>
  `;
};
export default SamuraiLady;
