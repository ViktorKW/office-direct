import { handleLocation, handleRoute } from './helpers/router';
import './styles/index.scss';
import "./styles/text.scss"
import "./styles/button.scss"
import "./styles/input.scss"
handleLocation();

document.addEventListener('click', (e) => {
  if (e.target.dataset.link === '') {
    handleRoute(e);
  }
});
