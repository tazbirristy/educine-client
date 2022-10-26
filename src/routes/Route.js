import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";
import Faq from "./../components/Faq";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
