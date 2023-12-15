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
        <Sorting setSort={setSort}/>
        <div className='flex'>
            <Category setCategory={setCategory}/>
            <Product category={category} sort={sort}/>

        </div>
    </div>
  )
}

export default Home