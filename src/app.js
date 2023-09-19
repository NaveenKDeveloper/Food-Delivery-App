import React,{lazy,Suspense,useEffect,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from './component/Header';
import Body from './component/Body';
import About from './component/About';
import Error from "./component/Error";
import Contact from "./component/Contact";
//import Menu from "./component/Menu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import Cart from "./component/Cart"

const Menu = lazy(()=> import("./component/Menu"))

const AppLayout = () => 
{
  const [loggedUser, setLoggedUser] = useState()

  useEffect(()=>{
    const data = {
      user:"Naveen K"
    }

    setLoggedUser(data.user)
  },[])
 return (
  <Provider store={appStore}>
    <UserContext.Provider value={{user:loggedUser,setLoggedUser}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  </Provider>
  );
}



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
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
