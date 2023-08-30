import Card from './Card'; 
import { SWIGGY_API } from '../utils/constants';
import {useState,useEffect} from 'react';
import Shimmer from './Shimmer';

const Body = () => {
  const [listOfRestaurant,setlistOfRestaurant] = useState([]);

    useEffect(()=>{
      fetchData()
    },[])

    const fetchData = async () => {
      const data = await fetch(SWIGGY_API)
      const json = await data.json()
      setlistOfRestaurant(json.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
    }
    
    return listOfRestaurant.length === 0  ?  <Shimmer  /> : (
      <div className="body">
        {/* <div className="search">Search</div> */}
        <button onClick={()=> {
          let filteredList = listOfRestaurant.filter((element)=>{
           return element.data.avgRating >= 4
          })
          setlistOfRestaurant(filteredList)
        }}>Filter Rating </button>
        <div className="res-container">
          {
            listOfRestaurant.map((eachItem) =>  { return (
            <Card key={eachItem.info.id} resData = {eachItem} />)} )
          }
        </div>
      </div>
    )
  }

  export default Body;