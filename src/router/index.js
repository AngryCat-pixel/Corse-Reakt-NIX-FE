import Products from "../pages/Products";
import AddProduct from "../pages/AddProduct";
import Category from "../pages/Category";

export const RouteNames = {
  Products: "/",
  AddProducts: "/add-product",
  Category: "/category",
};

export const routes = [
  { path: RouteNames.Products, element: Products },
  { path: RouteNames.AddProducts, element: AddProduct },
  { path: RouteNames.Category, element: Category },
];
