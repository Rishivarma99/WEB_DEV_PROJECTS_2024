// MAIN REACT START HERE 

import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';

// CREATE ROOT 

// HERE ROOT IS ID OF PUBLIC INDEX DIV 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// const root2 = ReactDOM.createRoot( get the element)