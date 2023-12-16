import React, { useEffect } from 'react'
import {useParams } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { getDetailProduct } from '../redux/productSlice';
import Detailcomp from '../components/detail/Detailcomp';
import Loading from '../components/Loading';
const Detail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {productsDetail , productsDetailStatus} = useSelector(state => state.products)

        useEffect(() => {
            dispatch(getDetailProduct(id))
        }, [dispatch , id])
        console.log(productsDetail)
  return (
    <div>

      {
        productsDetailStatus == "LOADING" ? <Loading/> : <Detailcomp productsDetail={productsDetail}/>
      }
    
    </div>
  )
}

export default Detail