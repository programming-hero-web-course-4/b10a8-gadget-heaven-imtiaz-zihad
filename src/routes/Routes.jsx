import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import DashBoard from "../pages/DashBoard";
import AccCards from "../componentes/AccCards";
import AccDetails from "../pages/AccDetails";

import DashCart from "../componentes/DashCart";
import DashWish from "../componentes/DashWish";
import ErrorPage from "../Erroepage/ErrorPage";
import Hello from "../componentes/Hello";
import About from "../componentes/ABout";



const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:category",
            element: <AccCards></AccCards>,
            loader: () => fetch("../acc.json"),
          },
          {
            path: "/",
            element: <AccCards></AccCards>,
            loader: () => fetch("../acc.json"),
          },
          {
            path: "/",
            element: <Hello />,
            loader: () => fetch("../categories.json"),
          },
        ],
      },
      {
        path: "/statics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/abouts",
        element: <About></About>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        children: [
          {
            path: "/dashboard",
            element: < DashCart/>,
          },
          {
            path: "/dashboard/cart",
            element: <DashCart />,
          },
          {
            path: "/dashboard/wish",
            element: <DashWish />,
          },
        ],
      },
      {
        path: "/acc/:id",
        element: <AccDetails />,
        loader: () => fetch("../acc.json"),
      },
    ],
  },
]);

export default routes;
