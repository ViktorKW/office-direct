import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import ErrorPage from '../screens/ErrorPage';

export const routes = {
  '/': Home,
  '/about': About,
  '/contact': Contact,
  404: ErrorPage,
};
