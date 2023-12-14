import React from 'react'

const Products = ({product}) => {
  return (
    <div className='w-[300px] p-3 mb-5  mx-5 border rounded-md relative'>
        <div className='text-2xl font-bold absolute rounded-md top-0 right-0 p-2 m-1 bg-slate-500 text-white'>{product?.price}TL</div>
            <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="" />
            <div className='text-center text-sm font-bold px-3 m-3 cursor-pointer'>{product?.title} </div>
    </div>
  )
}

export default Products