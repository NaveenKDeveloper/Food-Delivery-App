import Shimmer from "./Shimmer"
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const Menu = () =>{
    const {resId} = useParams();
    
    const menu = useRestaurantMenu(resId)
    
    if(menu.length == 0){
        return <Shimmer />
    }

    const {name,costForTwoMessage,cuisines} = menu?.cards[0]?.card?.card?.info
    const menuItems = menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    return (
        <div className="menu-Container"> 
            <h1>{name}</h1>
            <p>{cuisines.join(" ,")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {menuItems.map((item)=> <li key={item.card.info.id}> {item.card.info.name} - {item.card.info.defaultPrice/100 || item.card.info.price/100}rs  </li>)}
            </ul>

        </div>
    )
}

export default Menu;