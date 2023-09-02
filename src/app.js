import React from "react";
import ReactDOM from "react-dom/client";
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import Error from "./component/Error";
import Contact from "./component/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children: [
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
