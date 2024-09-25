
import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
     products : [],
     isLoading: false,
     error: null
};

export const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  
})



export default productSlice.reducer  