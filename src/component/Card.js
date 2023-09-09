import {CARD_IMAGE_URL} from '../utils/constants';

const Card = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,
      name,cuisines,costForTwo, avgRating,
      sla} = resData?.info
    
    return (
      <div className="w-52 m-5 hover:w-48 duration-500">
        <img alt="card-image" className="w-52 rounded-2xl" src={CARD_IMAGE_URL + cloudinaryImageId}  /> 
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

export const withPromotedLabel = (Card) =>{
      return (props)=>{
        return (
          <div>
            <label className='absolute bg-black rounded-md text-white p-1 m-1 '>Promoted</label>
            <Card {...props}/>
          </div>
        )
      }
}

export default Card;