import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [],
};
const cartSlice = createSlice({
    name:'cart',
    initialState:initialCartState,
    reducers:{
        addCart(state, action){
            state.items = [...state.items, action.payload]
        },
        addMealQuantity(state, action){
            state.items[action.payload].quantity = state.items[action.payload].quantity + 1
            state.items[action.payload].total += state.items[action.payload].price
        },
        incrementMealQuantity(state, action){
            state.items[action.payload].quantity += 1
            state.items[action.payload].total += state.items[action.payload].price
        },
        decrementMealQuantity(state,action){
            state.items[action.payload].quantity -= 1
            state.items[action.payload].total -= state.items[action.payload].price
        },
        removeCart(state, action){
            state.items = state.items.filter(item => item.id !== action.payload )
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;