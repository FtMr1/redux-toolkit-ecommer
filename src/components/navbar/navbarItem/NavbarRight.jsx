import React, { useEffect } from 'react'
import { CiSearch , CiHeart ,CiShoppingBasket } from "react-icons/ci";
import {useDispatch , useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getTotal } from '../../../redux/cartSlice';

const NavbarRight = () => {
  const dispatch = useDispatch()
  const {itemCount} = useSelector(state  => state.carts)
const navigate = useNavigate()


  
  useEffect(() => {
      dispatch(getTotal())
  
  }, [dispatch])
  

  return (
    <div className='flex items-center gap-4'>
        <div className='flex items-center border p-3 rounded-full bg-gray-300'>
            <input placeholder='Arama Yapın' type="text"  className=' bg-gray-300 outline-none'/>
            <CiSearch size={25}/>
        </div>
        <CiHeart size={25}/>
        <div onClick={()=>navigate("cart")} className='relative'>
                <div className='absolute -top-3 -right-6  bg-red-600  text-white rounded-full w-5 h-5'>{itemCount}</div>
                <CiShoppingBasket size={25}/>
        </div>
    </div>
  )
}

export default NavbarRight