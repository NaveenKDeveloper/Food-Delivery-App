import Card from "./Card";
import { SWIGGY_API } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setfilteredList] = useState([]);

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

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">

        <div className="search" >
        <input type="text" value={searchText}  onChange={ (e)=>{
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
      

      <button className="btn-Filter"
        onClick={() => {
          let filteredList = listOfRestaurant.filter((element) => {
            return element.info.avgRating >= 4.5;
          });
          setfilteredList(filteredList);
        }}
      >
        Filter Rating 4.5+
      </button>
        </div> 
      
      <div className="res-container">
        {filteredList.map((eachItem) => {
          return <Link to={"/restaurants/" + eachItem.info.id } key={eachItem.info.id}><Card  resData={eachItem} /></Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
