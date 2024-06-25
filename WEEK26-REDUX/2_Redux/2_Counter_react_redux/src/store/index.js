import { createStore } from "redux";

let INTIAL_VALUE = {
  counter: 0,
};

const counterReducer = (store = INTIAL_VALUE, action) => {
  if (action.type == "DECREMENT") {
    console.log("hi");
    let newCounter = store.counter - 1;   // here irrespective of store name we nned to use stroe 
    return { counter: newCounter };
  }
  else if (action.type == "INCREMENT") {
    console.log("hi");
    let newCounter = store.counter + 1;   // here irrespective of store name we nned to use stroe 
    return { counter: newCounter };
  }
  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
