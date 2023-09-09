import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MenuCategory from "./MenuCategory";

const Menu = () =>{
    const {resId} = useParams();
    
    const menu = useRestaurantMenu(resId)
    
    if(menu.length == 0){
        return <Shimmer />
    }

    const {name,costForTwoMessage,cuisines} = menu?.cards[0]?.card?.card?.info
    const menuItems = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards

    const categories = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => {
        return category?.card?.card['@type']  === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    return (
        <div className="mt-3 mx-auto max-w-3xl"> 
            <h1 className="font-bold my-3">{name}</h1>
            <p>{cuisines.join(" ,")} - {costForTwoMessage}</p>
            {categories.map((category) => <MenuCategory categoryData={category?.card?.card} />)}
        </div>
    )
}

export default Menu;