import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import ErrorPage from '../screens/ErrorPage';
import BasketPreview from '../components/basketPreview';

export const routes = {
  '/': Home,
  '/cart': BasketPreview,
  '/about': About,
  '/contact': Contact,
  404: ErrorPage,
};
