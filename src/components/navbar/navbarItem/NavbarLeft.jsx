import React from 'react'
import {useNavigate} from 'react-router-dom'
const NavbarLeft = () => {
  const navigate = useNavigate()
  return (
    <div>

        <h1 onClick={()=>navigate("/")}  className='text-6xl cursor-pointer'>Shoplaa</h1>
    </div>
  )
}

export default NavbarLeft