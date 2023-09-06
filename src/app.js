import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import Error from "./component/Error";
import Contact from "./component/Contact";
//import Menu from "./component/Menu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const Menu = lazy(()=> import("./component/Menu"))

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
      },
      {
        path:"/restaurants/:resId",
        element: <Suspense fallback={<h2>Loading..</h2>}><Menu /></Suspense>
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
