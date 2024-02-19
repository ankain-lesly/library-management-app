import { createBrowserRouter } from "react-router-dom";
// Layouts
import AdminLayout from "./views/AdminLayout";
import DefaultLayout from "./views/DefaultLayout";
import RegisterLayout from "./views/RegisterLayout";
import Toast from "./views/templates/Toast";
// Default Layouts
import Login from "./views/default/login";
import Signup from "./views/default/signup";
import Logout from "./views/default/logout";
import Home from "./views/default/home";
import Welcome from "./views/default/Welcome";
import About from "./views/default/about";
import Contact from "./views/default/contact";
import SingleBook from "./views/default/SingleBook";
// Main Layouts
import CreateProduct from "./views/admin/CreateProduct";
import CreateCategory from "./views/admin/CreateCategory";

import Products from "./views/admin/Products";
import Favorite from "./views/admin/Favorite";
import Dashboard from "./views/admin/Dashboard";
// Structure Layouts
import NotFound from "./views/NotFound";
import Category from "./views/default/Category";
const router = createBrowserRouter([
  {
    element: <Toast />,
    children: [
      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/:title",
            element: <SingleBook />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/welcome",
            element: <Welcome />,
          },
          {
            path: "/category/:catTitle",
            element: <Category />,
          },
        ],
      },
      {
        // path: "/",
        element: <AdminLayout />,
        children: [
          // {
          //   path: "/dashboard",
          //   element: <Navigate to='/dashboard' />,
          // },
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/products",
            element: <Products />,
          },
          {
            path: "/dashboard/products/:type",
            element: <Products />,
          },
          {
            path: "/dashboard/favorite",
            element: <Favorite />,
          },
          {
            path: "/dashboard/create/product",
            element: <CreateProduct />,
          },
          {
            path: "/dashboard/create/category",
            element: <CreateCategory />,
          },
        ],
      },
      {
        // path: "/",
        element: <RegisterLayout />,
        children: [
          {
            path: "/register",
            element: <Login />,
          },
          {
            path: "/register/login",
            element: <Login />,
          },
          {
            path: "/register/signup",
            element: <Signup />,
          },
          {
            path: "/user/logout",
            element: <Logout />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
