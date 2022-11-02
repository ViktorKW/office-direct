import './style.scss';
import Header from '../../components/Header';
import chevron from '../../assets/icons/Chevron.svg';

const Testimonials = () => {
  return `
    <div class="page ">
      ${Header()}
      <div class="hello">
        <ul>
          <li><a href="/" data-link>Home</a><img src='${chevron}' alt="chevron"/></li>
          <li>Tesimonials</li>
        </ul>       
      </div>
    </div>
  `;
};

export default Testimonials;
