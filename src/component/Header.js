import {APP_LOGO} from '../utils/constants';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => 
{
  const [btnName,setBtnName] =  useState("Login")
return (

    <div className="border-b-2 shadow-md">
      <div className="px-[18%] flex justify-between">
      <div className="logo-container">
        <img
          className="w-36"
          src={APP_LOGO}
        />
      </div>
      <div>
        <ul className='flex p-4 m-4'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="btn-login" onClick={()=> btnName == "Login" ? setBtnName("Logout") : setBtnName("Login") }>{btnName}</button>
        </ul>
      </div>
      </div>
      
    </div>
  );
}



export default Header;