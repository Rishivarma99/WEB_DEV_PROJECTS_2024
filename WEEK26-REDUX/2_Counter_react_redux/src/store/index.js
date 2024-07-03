// import { createStore } from "redux";

import { configureStore, createSlice } from '@reduxjs/toolkit'



// TO CREATE SLICE : 
// this slices can be individually exported in other files 
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
    decrement: (state) => {
      state.counterValue = state.counterValue - 1;

      // console.log(state, action);

    },
    add: (state, action) => {
      console.log(action.payload.value);
      state.counterValue = state.counterValue + action.payload.value;
    },
    subtract: (state, action) => {
      console.log(action.payload.value);
      state.counterValue = state.counterValue - action.payload.value;
    }
  }

})

// CREATE NEW SLICE FOR PRIVACY TOGGLE 

const privacySlice = createSlice({
  name: 'privacytoggle',
  initialState: false,
  reducers: {
    toggle: (state) => {
      state = !state;
      console.log(state);
      return state;
    }
  }
})

// TO CREATE A STORE REDUX : 
const counterStore = configureStore({
  // MULTIPLE REDUCERS CAN BE GIVEN 
  reducer: {
    counter: counterSlice.reducer,
    privacytoggle: privacySlice.reducer
  }
});

// TO EXPORT ACTIONS 
export const counterActions = counterSlice.actions;
export const privacyActions = privacySlice.actions;
export default counterStore;
