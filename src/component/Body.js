import Card,{withPromotedLabel} from "./Card";
import { SWIGGY_API } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setfilteredList] = useState([]);

  const CardPromotedLabel = withPromotedLabel(Card)

  const {user,setLoggedUser} = useContext(UserContext)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    setlistOfRestaurant(
      json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredList(
      json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const isOnline = useOnlineStatus()

  if(!isOnline){
    return <h1>No Internet Connection!!</h1>
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between mt-2">
      <button className="rounded-lg"
        onClick={() => {
          let filteredList = listOfRestaurant.filter((element) => {
            return element.info.avgRating >= 4.5;
          });
          setfilteredList(filteredList);
        }}
      >
        Filter Rating 4.5+
      </button>

        <div className="search" >
        <input type="text" className="bg-gray-200 rounded-lg" value={searchText} placeholder="Search" onChange={ (e)=>{
          setSearchText(e.target.value)
        }} />
        <button onClick={
          () => {
            let filteredSearch = listOfRestaurant.filter((element)=>{
              return element.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setfilteredList(filteredSearch);
          }
        }>Search</button>
        </div>
        {/* <div className="search" >
        <input type="text" className="bg-gray-200 rounded-lg" value={user}  onChange={ (e)=>{
          setLoggedUser(e.target.value)
        }} />
        </div> */}
        </div> 
      
      <div className="flex flex-wrap">
        {filteredList.map((eachItem,index) => {
          return <Link to={"/restaurants/" + eachItem.info.id } key={eachItem.info.id}>
            {
              (index == 0) ? <CardPromotedLabel resData={eachItem}/> : <Card  resData={eachItem} />
            }
            </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
