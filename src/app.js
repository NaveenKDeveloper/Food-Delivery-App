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
    <UserContext.Provider value={{user:loggedUser,setLoggedUser}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    
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
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
