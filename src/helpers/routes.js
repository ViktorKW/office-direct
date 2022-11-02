import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import ErrorPage from "../screens/ErrorPage";
import CatalogPage from "../screens/CatalogPage";
import ProductPage from "../screens/ProductPage";
import Basket from "../screens/Basket";

export const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/catalog": CatalogPage,
  "/product": ProductPage,
  "/cart": Basket,
  404: ErrorPage,
};
