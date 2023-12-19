import React from 'react'
import { removeFromCart } from '../../redux/cartSlice'
import {useDispatch , useSelector } from 'react-redux'
const CartComp = ({cart}) => {
  const dispatch = useDispatch()
  return (
    <div className=' my-10 flex items-center justify-between'>

      <img className='w-[200px] h-[200px] object-cover' src={cart.image} alt="" />
      <div className=' w-[480px]'>
        <div className='text-xl  font-semibold'>{cart?.title}</div>
        <div >{cart?.decription}</div>
      </div>
      
        <div className='text-2xl text-blue-600'>{cart?.price} TL ({cart?.quantity})</div>
        <div onClick={()=>dispatch(removeFromCart(cart?.id))} className='bg-red text-white bg-red-600 w-[150px] h-16  text-2xl cursor-pointer rounded-md flex items-center justify-center'>Ürünü Sil</div>
     
    </div>
  )
}

export default CartComp