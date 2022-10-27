import "./style.scss";
import Footer from "../../components/footer";
import Catalog from "../../components/Catalog";
import Introduction from "../../components/Introduction";
import SamuraiLady from "../../components/SamuraiLady";
import Description from "../../components/Description";
import Clients from "../../components/Clients";

const Home = () => {
  return `
    <div class = "home-page">
      ${Introduction()}
      ${Catalog()}
      ${Description()}
      ${SamuraiLady()}
      ${Clients()}
      ${Footer()}
    </div>
  `;
};

export default Home;
