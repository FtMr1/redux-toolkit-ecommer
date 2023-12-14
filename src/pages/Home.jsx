import React, { useState } from 'react'
import SliderCount from '../components/home/SliderCount'
import Sorting from '../components/home/Sorting'
import Category from '../components/home/Category'
import { Product } from '../components/home/Product'

const Home = () => {
  const  [sort , setSort] = useState('')
  const  [category , setCategory] = useState('')
  return (
    <div>
        <SliderCount/>  
        <Sorting/>
        <div className='flex'>
            <Category/>
            <Product/>

        </div>
    </div>
  )
}

export default Home