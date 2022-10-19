import './style.scss';
import Header from '../../components/Header';
import testImg from '../../assets/test-1.jpg';

const Home = () => {
  return `
    ${Header()}
    <div class="hero home">
      <h1>Homepage</h1>
      <img src="${testImg}" alt="/">
    </div>
  `;
};

export default Home;
