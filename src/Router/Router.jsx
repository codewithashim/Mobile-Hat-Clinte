import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Product from "../Pages/Products/Products";
import ProductsCetagory from "../Pages/ProductsCetagory/ProductsCetagory";
import Wishlish from "../Dasshboard/GenarelUser/Wishlist/Wishlish";
import MyOrder from "../Dasshboard/GenarelUser/MyOrder/MyOrder";
import PrivetRoute from "./PrivetRoute";
import Profile from "../Dasshboard/Profile/Profile";
import AllBuyer from "../Dasshboard/Admin/AllBuyer/AllBuyer";
import AllShellar from "../Dasshboard/Admin/AllShellar/AllShellar";
import AllUser from "../Dasshboard/Admin/AllUser/AllUser";
import AddProduct from "../Dasshboard/Shellar/AddProduct/AddProduct";
import MyBuyer from "../Dasshboard/Shellar/MyBuyer/MyBuyer";
import MyProduct from "../Dasshboard/Shellar/MyProduct/MyProduct";

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
          return fetch(`http://localhost:8000/category/${params.categoryName}`);
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
    element: (
      <PrivetRoute>
        <DashboardLayout></DashboardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard/wishlist",
        element: <Wishlish></Wishlish>,
      },
      {
        path: "/dashboard/myorder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashboard/allbuyer",
        element: <AllBuyer></AllBuyer>,
      },
      {
        path: "/dashboard/allshellar",
        element: <AllShellar></AllShellar>,
      },
      {
        path: "/dashboard/alluser",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/mybuyer",
        element: <MyBuyer></MyBuyer>,
      },
      {
        path: "/dashboard/myproduct",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default route;
