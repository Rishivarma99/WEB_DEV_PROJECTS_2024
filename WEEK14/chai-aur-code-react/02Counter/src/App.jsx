// CONSTRAIED THE COUNTER TO 0 TO 20 

// COMPLETE HTML AND JS CODE IS HERE ONLY 
// used to bring the hooks 
import { useState ,useEffect } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 5 ; 
  let [counter,setCounter] = useState(2);

  const addValue = () =>{
    console.log("counter before adding : " + counter);
    if(counter>=20){
      counter = 20 
    }
    else{
      counter = counter + 1;
    }
    console.log("counter before setting : " + counter);

    setCounter(counter);
    console.log("counter after setting : " + counter);

  }
  const removeValue = () =>{
    console.log(counter);
    if(counter<=0){
      counter=0;
    }
    else{
      counter = counter-1;
    }
    console.log("After counter -1 : " + counter);
    setCounter(counter);
    console.log("After setting counter : " + counter);
  }

  return (
    <>
      <h1>chai code Counter {counter} project</h1>

      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}> Add value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
