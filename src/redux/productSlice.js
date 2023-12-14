import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { STATUS } from '../utils/status'


const initialState={
    products:[],
    productsStatus : STATUS.IDLE,
    productsDetail: [],
    productsDetailStatus: STATUS.IDLE
}
 export const getProduct = createAsyncThunk('getProducts' , async()=>{
    const response = await fetch('https://fakestoreapi.com/products')
    const data = response.json()
    return data
 })
 export const getDetailProduct = createAsyncThunk('getProduct' , async(id)=>{
    const response = await fetch(`https://fakestoreapi.com/products${id}`)
    const data = response.json()
    return data
 })
 export const getCategoryProduct = createAsyncThunk('getCategory' , async(category)=>{
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = response.json()
    return data
 })
const productSlice  = createSlice({
    name : "products",
    initialState,
    reducers:{},
    extraReducers : (builder ) =>{
        builder
        .addCase(getProduct.pending , (state, action) =>{
            state.productsStatus = STATUS.LOADING
        })
        .addCase(getProduct.fulfilled, (state , action) =>{
            state.productsStatus = STATUS.SUCCES;
            state.products = action.payload
        })
        .addCase(getProduct.rejected, (state , action) =>{
            state.productsStatus = STATUS.FAIL;
            
        })
        .addCase(getDetailProduct.pending , (state, action) =>{
            state.productsDetailStatus = STATUS.LOADING
        })
        .addCase(getDetailProduct.fulfilled, (state , action) =>{
            state.productsDetailStatus = STATUS.SUCCES;
            state.productsDetail = action.payload
        })
        .addCase(getDetailProduct.rejected, (state , action) =>{
            state.productsDetailStatus = STATUS.FAIL;
          
        })
        .addCase(getCategoryProduct.pending , (state, action) =>{
            state.productsStatus = STATUS.LOADING
        })
        .addCase(getCategoryProduct.fulfilled, (state , action) =>{
            state.productsStatus = STATUS.SUCCES;
            state.products = action.payload
        })
        .addCase(getCategoryProduct.rejected, (state , action) =>{
            state.productsStatus = STATUS.FAIL;
            
        })
    }
})



export default productSlice.reducer