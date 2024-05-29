


// To import redux intially 
const redux = require('redux');

const INITIAL_VALUE = {
  counter: 0
};
// reducer function 
const reducer = (store = INITIAL_VALUE, action) => {

  if (action.type == "INCREMENT") {

    store.counter = store.counter + 1;
    return store;  // we are returning the store the updated one 
  }
  else if (action.type == "DECREMENT") {

    store.counter = store.counter - 1;
    return store;  // we are returning the store the updated one 
  }
}

// to create store : 
const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
}

store.subscribe(subscriber);

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
