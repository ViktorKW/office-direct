import "./style.scss";
import Header from "../../components/Header";
import testImg from "../../assets/test-2.jpg";

const About = () => {
  return `
      ${Header()}
      <div class="hero about">
        <h1>About</h1>
      </div>
   `;
};

export default About;
