import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",

        }
    ]
  },
]);

export default route;