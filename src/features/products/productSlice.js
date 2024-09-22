
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
     products : [],
     isLoading: false,
     error: null
};

const BASE_URl='http://localhost:5000/products'

export const fetchProducts = createAsyncThunk('products/fetchProducts',  async() => {
    const res =await axios.get(BASE_URl);
    // console.log(res.data);
    return res.data;
}    
) 

export const deleteProduct = createAsyncThunk('products/deleteProduct',  async(id) => {
  const res =await axios.delete(`${BASE_URl}/${id}`);
  // console.log(res.data);
  return id;
}
) 

export const createProduct = createAsyncThunk('products/createProduct',  async(product) => {
  const res =await axios.post(BASE_URl, product);
  return res.data;
  
}
)

export const editProduct = createAsyncThunk('products/editProduct',  async(id) => {
  const res =await axios.put(`${BASE_URl}/${id}`);
  // console.log(res.data);
  return id;
  
}
)

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) =>{
        state.isLoading = true;
        state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) =>{
        state.isLoading = false;
        state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) =>{
        state.isLoading = false;
        state.error = action.error.message;
    })
    //delete
    .addCase(deleteProduct.fulfilled, (state, action) =>{
      state.products = state.products.filter(product=> product.id !== action.payload
      )
  })
  //create
  .addCase(createProduct.fulfilled, (state, action) =>{
   
    state.products.push(action.payload) ;
})

 //update
 .addCase(editProduct.fulfilled, (state, action) =>{
   
  state.products = state.products.filter(product=> product.id === action.payload)
})
  }
})



export default productSlice.reducer  