import './style.scss';
import Header from '../../components/Header';

const ErrorPage = () => {
  return `
    ${Header()}
    <div class="hero error">
      <h1>404 Not Found</h1>
    </div>
  `;
};

export default ErrorPage;
