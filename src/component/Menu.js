import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const Menu = () =>{
    const {resId} = useParams();

    const [showItem,setShowItem] = useState(0)
    
    const menu = useRestaurantMenu(resId)
    
    if(menu.length == 0){
        return <Shimmer />
    }

    const {name,costForTwoMessage,cuisines} = menu?.cards[0]?.card?.card?.info
    //const menuItems = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    const categories = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => {
        return category?.card?.card['@type']  === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return (
        <div className="mt-3 mx-auto max-w-3xl"> 
            <h1 className="font-bold my-3">{name}</h1>
            <p>{cuisines.join(" ,")} - {costForTwoMessage}</p>
            {categories.map((category,index) => <MenuCategory categoryData={category?.card?.card} key={category?.card?.card?.title} 
            showItem={(index === showItem) ? true : false}
            setShowItem={()=>setShowItem(index)}/>)}
        </div>
    )
}

export default Menu;