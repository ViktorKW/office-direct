import "./style.scss";
import Footer from "../../components/footer";
import Catalog from "../../components/Catalog";
import Introduction from "../../components/Introduction";
import SamuraiLady from "../../components/SamuraiLady";
import Description from "../../components/Description";

const Home = () => {
  return `
    <div class = "home-page">
      ${Introduction()}
      ${Catalog()}
      ${Description()}
      ${SamuraiLady()}
      ${Footer()}
    </div>
  `;
};

export default Home;
