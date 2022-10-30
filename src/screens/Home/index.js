import "./style.scss";
import Header from "../../components/Header";
import Catalog from "../../components/Catalog";
import Introduction from "../../components/Introduction";
import SamuraiLady from "../../components/SamuraiLady";
import Description from "../../components/Description";
import Clients from "../../components/Clients";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/footer";

const Home = () => {
  return `
    <div class = "home-page">
      ${Header()}
      ${Introduction()}
      ${Catalog()}
      ${Description()}
      ${SamuraiLady()}
      ${Clients()}
      ${ContactUs()}
      ${Footer()}
    </div>
  `;
};

export default Home;
