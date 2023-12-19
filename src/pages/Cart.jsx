import React, { useEffect } from 'react'
import {useDispatch , useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getTotal } from '../redux/cartSlice'
import CartComp from '../components/cart/CartComp'
const Cart = () => {
 
 
  const dispatch = useDispatch()
  const {carts , totalAmount , itemsCount} = useSelector(state  => state.carts)
const navigate = useNavigate()


    console.log(carts , totalAmount , itemsCount)
  useEffect(() => {
      dispatch(getTotal())
  
  }, [dispatch])
  
  return (
    <div>
      {
      
          carts?.length > 0 ?  
          <div>
            {
              carts.map((cart , i)=>(
                <CartComp key={i} cart={cart}/>
              ))
            }
            <div className='flex justify-end text-2xl'>Toplam Tutar : <span className='font-bold text-3xl text-blue-800'>{totalAmount} TL</span></div>
          </div> :

          <div>
            Kartınız Boş
          </div> 
      }
      </div>
  )
}

export default Cart