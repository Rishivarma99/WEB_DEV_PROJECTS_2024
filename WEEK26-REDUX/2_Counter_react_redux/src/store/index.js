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
    increment: (state) => {
      state.counterValue = state.counterValue + 1;
      // console.log(state, action);
    },
    decrement: (state, action) => {
      state.counterValue = state.counterValue - 1;

      // console.log(state, action);

    }
  }

})

// TO CREATE A STORE REDUX : 
const counterStore = configureStore({
  // MULTIPLE REDUCERS CAN BE GIVEN 
  reducer: {
    counter: counterSlice.reducer
  }
});

// TO EXPORT ACTIONS 
export const counterActions = counterSlice.actions;
export default counterStore;
