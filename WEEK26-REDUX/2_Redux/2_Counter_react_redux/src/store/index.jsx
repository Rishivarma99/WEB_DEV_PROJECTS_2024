import { createStore } from "redux";

const INTIAL_VALUE = {
  counter: 0,
};

const reducer = (store = INTIAL_VALUE, action) => {
  return store;
};

const counterStore = createStore(reducer);

// WE ALSO NEED TO EXPORT STORE  :
export default counterStore;
