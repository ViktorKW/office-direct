import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import ErrorPage from "../screens/ErrorPage";
import CatalogPage from "../screens/CatalogPage";
import ProductPage from "../screens/ProductPage";

export const routes = {
  "/": Home,
  "/about": About,
  "/contact": Contact,
  "/catalog": CatalogPage,
  "/product": ProductPage,
  404: ErrorPage,
};
