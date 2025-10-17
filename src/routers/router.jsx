import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/Foods/AddFood";
import Contact from "../pages/Home/Contact";
import AllFoods from "../pages/Foods/AllFoods";
import FoodDetails from "../pages/Foods/FoodDetails";
import RequestPage from "../pages/RequestPages/RequestPage";
import MyFood from "../pages/Foods/MyFood";
import UpdateFood from "../pages/Foods/UpdateFood";
import MyRequest from "../pages/Foods/MyRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/allFood",
        element: <AllFoods />,
      },
      {
        path: "/details/:id",
        element:<PrivateRoute><FoodDetails /></PrivateRoute> ,
        loader: ({ params }) =>
          fetch(`https://tasty-share-server.vercel.app/foods/${params.id}`),
      },
      {
        path: "/myFood",
        element: (
          <PrivateRoute>
            {" "}
            <MyFood />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/myRequest",
        element: (
          <PrivateRoute>
            <MyRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateFood />{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tasty-share-server.vercel.app/foods/${params.id}`),
      },
      {
        path: "/requestPage/:id",
        element: <RequestPage />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/aboutUs",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
