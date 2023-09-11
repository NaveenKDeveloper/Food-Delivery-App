import React from 'react'

const ItemsList = ({items}) => {
    
  return (
    <div>{items.map(item => 
    <div className='bottom-5 shadow-sm m-2 p-2'>
        <div className='font-semibold text-sm text-[#3e4152]'>{item.card.info.name}</div>
        <div>{item.card.info.price/100}₹</div>
        <p className='text-xs text-slate-400'>{item.card.info.description}</p>
    </div>
    )}
    </div>
  )
}

export default ItemsList