// import { createStore } from "redux";

import { configureStore, createSlice } from '@reduxjs/toolkit'
// let INTIAL_VALUE = {
//   counter: 0,
// };

// const counterReducer = (store = INTIAL_VALUE, action) => {
//   if (action.type == "DECREMENT") {
//     console.log("hi");
//     let newCounter = store.counter - 1;   // here irrespective of store name we nned to use stroe 
//     return { counter: newCounter };
//   }
//   else if (action.type == "INCREMENT") {
//     console.log("hi");
//     let newCounter = store.counter + 1;   // here irrespective of store name we nned to use stroe 
//     return { counter: newCounter };
//   }
//   return store;
// };


// TO CREATE SLICE : 
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counterValue: 0
  },
  reducers: {
    increment: (state, action) => {
      console.log(state, action);
    },
    decrement: (state, action) => {
      console.log(state, action);

    }
  }

})

const counterStore = configureStore({
  reducer: {

  }
});

export default counterStore;
