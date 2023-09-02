import { useEffect,useState } from "react";
import { SWIGGY_MENU_API } from "../utils/constants";

const Menu = () =>{
    const [menu,setMenu]=useState([]);
    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const data = await fetch(SWIGGY_MENU_API+285645);
        const json = await data.json();
        setMenu(json?.data?.cards[0]?.card?.card?.info)
        // menu items data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
    }
    
    const {name,costForTwoMessage,cuisines} = menu
    return (
        <div className="menu-Container"> 
            <h1>{name}</h1>
            <p>{cuisines.join(" ,")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                <li></li>
            </ul>

        </div>
    )
}

export default Menu;