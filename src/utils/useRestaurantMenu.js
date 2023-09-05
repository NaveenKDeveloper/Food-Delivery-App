import { SWIGGY_MENU_API } from "./constants";
import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
    const [menuInfo,setMenuInfo] = useState([])

    useEffect(()=>{
        fetchData()
    },[])
    
    const fetchData = async () => {
        const data = await fetch(SWIGGY_MENU_API+resId);
        const json = await data.json()
        setMenuInfo(json?.data)
    }
    
    return menuInfo
  
}

export default useRestaurantMenu