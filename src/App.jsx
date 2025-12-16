import React from "react";
import Body from "./component/Body";
import { createBrowserRouter, Outlet } from "react-router";
import Pricing from "./component/Pricing";
import Header from "./component/Header";
import Login from "./component/Login";
import ForgotPassword from "./component/ForgotPassword";
import VerifyPassword from "./component/VerifyPassword";
import Reset from "./component/Reset";
import Profile from "./component/Profile";
import ImageGenerate from "./component/ImageGenerate";
import ProtectedRoutes from "./component/ProtectedRoutes";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
        <Login />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/image-generate",
        element: (
          <ProtectedRoutes>
            <ImageGenerate />{" "}
          </ProtectedRoutes>
        ),
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-otp",
    element: <VerifyPassword />,
  },
  {
    path: "/reset-password",
    element: <Reset />,
  },
]);

export default App;
