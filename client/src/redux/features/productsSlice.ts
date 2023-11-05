import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    allProducts: [],
    currentPage: 1,
    productsPerPage: 5,
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        setProductsList: (state, action)=>{
            state.products = action.payload;
            state.allProducts = action.payload;
        }
    }
})

export default productsSlice.reducer;
export const { setProductsList } = productsSlice.actions;