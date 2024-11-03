import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action) =>{
            const itemInCart = state.items.find(item => item.id === action.payload.id)
            if(itemInCart){
                itemInCart.quantity +=1; 
            } else{
                state.items.push({ ...action.payload, quantity: 1 })
            }
            console.log(state.items);
        },
        removeItem: (state,action) => {
            state.items = state.items.map(item => {
                if(item.id === action.payload.id) {
                    if(item.quantity>1){
                        return {...item,quantity:item.quantity-1}
                    } else return null;
                    
                }
                else return item;
            }).filter(item => item!= null);
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
})

export default cartSlice.reducer;
export const{addItem,removeItem,clearCart} = cartSlice.actions