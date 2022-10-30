
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import ErrorPage from "../screens/ErrorPage";
import Basket from "../screens/Basket";

export const routes = {
  "/": Home,
  "/cart": Basket,
  "/about": About,
  "/contact": Contact,
  404: ErrorPage,
};
