import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Product from "../Pages/Products/Products";
import ProductsCetagory from "../Pages/ProductsCetagory/ProductsCetagory";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
      },
      {
        path: "/product",
        element: <Product></Product>,
      },
      {
        path: "/contact",
      },
      {
        path: "/about",
      },
      {
        path: "/blogs",
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category/:categoryName",
        loader: ({ params }) => {
          return fetch(`http://localhost:8000/category${params.categoryName}`);
        },
        element: <ProductsCetagory></ProductsCetagory>,
      },

      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default route;
