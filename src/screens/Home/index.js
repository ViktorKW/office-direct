import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/footer';
import TestStyles from '../../components/TestStyles';
import ContactUs from '../../components/ContactUs';

const Home = () => {
  return `
    ${Header()}
    ${TestStyles()}
    ${ContactUs()}
    ${Footer()}
  `;
};

export default Home;
