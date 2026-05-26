import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import MainLayout from "../Layout/MainLayout";

const CustomRouter = createBrowserRouter([
{
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
},

{
    element: <MainLayout />,
    children: [
      {path: "/",element: <Home/> , index: true},
    ],
  },

])
export default CustomRouter