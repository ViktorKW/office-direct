import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import ErrorPage from '../screens/ErrorPage';
import Testimonials from '../screens/Testimonials';

export const routes = {
  '/': Home,
  '/about': About,
  '/testimonials': Testimonials,
  '/contact': Contact,
  404: ErrorPage,
};
