import React, { useEffect } from 'react'
import {useDispatch , useSelector} from 'react-redux'

import { getCategories } from '../../redux/categorySlice'
const Category = () => {
  const  dispatch = useDispatch()
  const  {categories}= useSelector(state => state.categories)

console.log(categories)

  useEffect(() => {
   dispatch(getCategories())
  }, [dispatch])
  
  return (
    <div className='w-1/6 bg-gray-100 p-4 min-h-screen'>
      <div className='border-b pb-1 text-xl font-bold'>
        KATEGORİ
      </div >
      {
        categories?.map((category , i )=>(
          <div  className='text-lg mt-1 px-2 cursor-pointer hover:bg-gray-400 p-2' key={i}>{category} </div>
        ))
      }
    </div>
  )
}

export default Category