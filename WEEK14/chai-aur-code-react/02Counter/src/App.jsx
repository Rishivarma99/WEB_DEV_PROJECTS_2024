
// used to bring the hooks 
import { useState ,useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter = 5 ; 

  const addValue = () =>{
  //  console.log("add button clicked ");
  counter = counter + 1 ;
  console.log(counter);
  }
  const removeValue = () =>{
    console.log("add button clicked ");

  }

  return (
    <>
      <h1>chai code Counter project</h1>

      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}> Add value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
