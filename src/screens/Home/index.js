import "./style.scss";
import Header from "../../components/Header";
import testImg from "../../assets/test-1.jpg";
import Footer from "../../components/footer";
import TestStyles from "../../components/TestStyles";
import Advantages from "../../components/Advantages";
import Catalog from "../../components/Catalog";
import Introduction from "../../components/Introduction";
import SamuraiLady from "../../components/SamuraiLady";

const Home = () => {
  return `
    ${Header()}
    <div class="hero home">
      <h1>Homepage</h1>
      <img src="${testImg}" alt="/">
    </div>
    ${Introduction()}
    ${Advantages()}
    ${Catalog()}
    ${SamuraiLady()}
    ${Footer()}
    ${TestStyles()}
  `;
};

export default Home;
