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
import AllBuyer from "../Dasshboard/Admin/AllBuyer/AllBuyer";
import AllShellar from "../Dasshboard/Admin/AllShellar/AllShellar";
import AllUser from "../Dasshboard/Admin/AllUser/AllUser";
import AddProduct from "../Dasshboard/Shellar/AddProduct/AddProduct";
import MyProduct from "../Dasshboard/Shellar/MyProduct/MyProduct";
import ShallerRoute from "./ShallerRoute";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import ReportedProducts from "../Dasshboard/Admin/ReportedProduct/ReportedProducts";
import WellComeUser from "../Dasshboard/WellComeUser/WellComeUser";
import Blogs from "../Pages/Blogs/Blogs";

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
        element: <Blogs></Blogs>,
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
        path: "/dashboard",
        element: <WellComeUser></WellComeUser>,
      },
      {
        path: "/dashboard/wishlist",
        element: (
          <BuyerRoute>
            <Wishlish></Wishlish>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/myorder",
        element: (
          <BuyerRoute>
            <MyOrder></MyOrder>
          </BuyerRoute>
        ),
      },
      {
        path: "/dashboard/allbuyer",
        element: (
          <AdminRoute>
            <AllBuyer></AllBuyer>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allshellar",
        element: (
          <AdminRoute>
            <AllShellar></AllShellar>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/alluser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/reportedproduct",
        element: (
          <AdminRoute>
            <ReportedProducts></ReportedProducts>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <ShallerRoute>
            <AddProduct></AddProduct>
          </ShallerRoute>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <ShallerRoute>
            <MyProduct></MyProduct>
          </ShallerRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default route;
