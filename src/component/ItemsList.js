import React from 'react'
import { IMAGE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem,removeItem } from '../utils/redux/cartSlice';

const ItemsList = ({items,isShow}) => {

  const dispatch = useDispatch()

  const handleAddClick = (item,index) =>{
    isShow ? dispatch(addItem(item)) : dispatch(removeItem(index))
  }
    
  return (
    <div>{items.map((item,index) => 
    <div className='bottom-5 shadow-sm m-2 p-2 flex justify-between'>
        <div className='w-9/12'>
          <div className='font-semibold text-sm text-[#3e4152]'>{item.card.info.name}</div>
        <div>{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}₹</div>
                <p className='text-xs text-slate-400'>{item.card.info.description}</p>

        </div>
        <div className='w-2/12'>
        <button className='absolute bg-white rounded-sm' onClick={() => handleAddClick(item,index)}>{isShow ? 'Add +' : 'Remove -'}</button>
        <img src={IMAGE_URL + item.card.info.imageId} className='w-21'/>
        
        </div>
        
    </div>
    )}
    </div>
  )
}

export default ItemsList