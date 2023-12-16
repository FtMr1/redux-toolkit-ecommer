import React from 'react'
import { useState } from 'react'
const Detailcomp = ({productsDetail}) => {
const [quantity, setQuantity] = useState(0)

const increment = ()=>  {
    if(quantity < productsDetail?.rating?.count){
      setQuantity(quantity+1) 
    }
       
   
}
const decrement = ()=>  {
  if(quantity > 0){
    setQuantity(quantity-1) 
  }
  
 
}
const addBasket = ()=>{
  
}

  return (
    <div className='flex gap-10 my-10'>
        <img className=' max-w-md' src={productsDetail?.image} alt="" />
        <div>
            <div className='text-4xl font-bold'>{productsDetail?.title}</div>
            <div className='my-2'>{productsDetail?.description}</div>
            <div className='my-2 text-xl '>Rating: {productsDetail?.rating?.rate}</div>
            <div className='my-2 text-xl '>Count: {productsDetail?.rating?.count}</div>
            <div className='my-2 text-2xl text-red-400 '>Price {productsDetail?.price} <span className='text-md'>TL</span></div>
            <div  className='flex items-center gap-5 my-5'>
                <div onClick={increment} className='text-5xl cursor-pointer'>+</div>
                <input className='w-9 text-center text-3xl font-bold' type="text"  value={quantity} />
                <div  onClick={decrement} className='text-5xl cursor-pointer'>-</div>
            </div>
            <div onClick={addBasket} className='border w-[200px] text-2xl rounded-full bg-slate-300 cursor-pointer my-3 flex items-center justify-center'>Sepete Ekle</div>
        </div>
    </div>
  )
}

export default Detailcomp