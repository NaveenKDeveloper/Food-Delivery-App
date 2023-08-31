import {CARD_IMAGE_URL} from '../utils/constants';

const Card = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,
      name,cuisines,costForTwo, avgRating,
      sla} = resData?.info
    
    return (
      <div className="card">
        <img alt="card-image" className="card-image" src={CARD_IMAGE_URL + cloudinaryImageId}  /> 
      <div className="card-details">
      <h3>{name}</h3>
      <h4>Delicious  {cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      </div>
      
      </div>
    )
  }

export default Card;