import Card from './Card'; 
import restaurantList from '../utils/mockData';
import {useState} from 'react';

const Body = () => {
  const [listOfRestaurant,setlistOfRestaurant] = useState(restaurantList);
    return (
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
            <Card key={eachItem.data.id} resData = {eachItem} />)} )
          }
        </div>
      </div>
    )
  }

  export default Body;