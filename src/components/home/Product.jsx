import React, { useEffect, useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getCategoryProduct, getProduct } from '../../redux/productSlice'
import Loading from '../Loading'
import Products from './Products'
import ReactPaginate from 'react-paginate';





export const Product = ({category , sort}) => {

  
  const dispatch = useDispatch()
  const {products  , productsStatus} = useSelector(state =>state.products)
  
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  
      

   console.log(products)
  useEffect(() => {
    if(category){
      dispatch(getCategoryProduct(category))
    }else{
      dispatch(getProduct())
    }
   
   }, [dispatch,category])
  return (
    <div>
      {
        productsStatus == "LOADING" ? <Loading/> : 
       <>
   
       <div className='flex flex-wrap'>
          {currentItems?.sort((a,b)=> sort == "inc" ? a.price-b.price : sort =="dec" ? b.price-a.price : "").map((product , i )=>(
            <Products key={i} product={product}/>
          ))}
        </div>
        <ReactPaginate
        className='paginate'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
      />
        </>
      }
    </div>
  )
}
