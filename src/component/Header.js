import {APP_LOGO} from '../utils/constants';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import {useSelector} from 'react-redux'

const Header = () => 
{
  const [btnName,setBtnName] =  useState("Login")
  const {user} = useContext(UserContext)

  const cartItems = useSelector((store)=> store.cart.items)
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
          <li>Cart {cartItems.length}</li>
          <button className="btn-login" onClick={()=> btnName == "Login" ? setBtnName("Logout") : setBtnName("Login") }>{btnName}-{user}</button>
        </ul>
      </div>
      </div>
      
    </div>
  );
}



export default Header;