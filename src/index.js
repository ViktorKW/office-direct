import { handleLocation, handleRoute } from './helpers/router';
import './styles/index.scss';
handleLocation();

document.addEventListener('click', (e) => {
  if (e.target.dataset.link === '') {
    handleRoute(e);
  }
});
