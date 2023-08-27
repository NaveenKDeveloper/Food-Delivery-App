import Card from './Card'; 
import restaurantList from '../utils/mockData';

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {
            restaurantList.map((eachItem) =>  { return (
            <Card key={eachItem.data.id} resData = {eachItem} />)} )
          }
        </div>
      </div>
    )
  }

  export default Body;