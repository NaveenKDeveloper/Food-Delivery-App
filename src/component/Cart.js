import React from 'react'
import ItemsList from './ItemsList'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../utils/redux/cartSlice'

const Cart = () => {
    const appStore = useSelector((store)=> store.cart.items)
    const dispatch = useDispatch()

    const handleClick = ()=>{
        dispatch(clearCart())
    }
  return (
    <div className='mt-3 mx-auto max-w-3xl'>
        <h1>Cart</h1>
        <button className='bg-black text-white rounded-lg p-1 m-1' onClick={handleClick}>Clear Cart</button>
        <ItemsList items={appStore} isShow={false}/>
    </div>
  )
}

export default Cart