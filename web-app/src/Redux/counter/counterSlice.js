import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    move: "on",
    cateogry : "",
    slide:1,
    // cart:0,
    items:[],
    isSortPanelOpen: false,

  },
  reducers: {
    increment: (state) => {
     state.move = state.move  === "on"? "off":"on"
      
    },
    cat1:(state)=>{
      state.cateogry = state.cateogry  === "new"? "":"new"
    },

    cat2:(state)=>{
      state.cateogry =  ""
    },
    cat3:(state)=>{
      state.cateogry = state.cateogry  === "men"? "":"men"
    },
    cat4:(state)=>{
      state.cateogry = state.cateogry  === "women"? "":"women"
    },
    cat5:(state)=>{
      state.cateogry = state.cateogry  === "kids"? "":"kids"
    },
    cat6:(state)=>{
      state.cateogry = state.cateogry  === "collection"? "":"collection"
    },
    cat7:(state)=>{
      state.cateogry = state.cateogry  === "shoes"? "":"shoes"
    },
    cat8:(state)=>{
      state.cateogry = state.cateogry  === "bags"? "":"bags"
    },
    cat9:(state)=>{
      state.cateogry = state.cateogry  === "lacoste"? "":"lacoste"
    },
    cat10:(state)=>{
      state.cateogry ="login"
    },
    cat11:(state)=>{
      state.cateogry =""
    },
    cat12:(state,newslide)=>{
      state.slide = newslide.payload
    },
    addToCart: (state, action) => {
      const itemInCart = state.items.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveToCart:(state, action)=>{
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
    
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    toggleSortPanel: (state) => {
      state.isSortPanelOpen = !state.isSortPanelOpen;
    },
    closeSortPanel: (state) => {
      state.isSortPanelOpen = false;
    },
  },
})

export const { increment,cat1,cat2,cat3,cat4,cat5,cat6,cat7,cat8,cat9,cat10,cat11,cat12,addToCart,RemoveToCart,increaseQuantity,decreaseQuantity,toggleSortPanel,closeSortPanel } = counterSlice.actions

export default counterSlice.reducer