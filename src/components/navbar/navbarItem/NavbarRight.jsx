import React from 'react'
import { CiSearch , CiHeart ,CiShoppingBasket } from "react-icons/ci";

const NavbarRight = () => {
  return (
    <div className='flex items-center gap-4'>
        <div className='flex items-center border p-3 rounded-full bg-gray-300'>
            <input placeholder='Arama Yapın' type="text"  className=' bg-gray-300 outline-none'/>
            <CiSearch size={25}/>
        </div>
        <CiHeart size={25}/>
        <div className='relative'>
                <div className='absolute -top-3 -right-3 text-white rounded-full w-5 h-5'>1</div>
                <CiShoppingBasket size={25}/>
        </div>
    </div>
  )
}

export default NavbarRight