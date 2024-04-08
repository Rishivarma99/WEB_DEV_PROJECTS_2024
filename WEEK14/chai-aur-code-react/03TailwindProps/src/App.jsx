import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1'


function App() {
  const [count, setCount] = useState(0)
  
  // CAN PASS OBJECTS AND ARRAYS  LIKE THIS IN PROPS 
  const myObj = {
    name : "rishi",
    age : "22"
  }
  
  const newArr = [1,2,3]
  return (
    <>
      <h1 className='text-white bg-green-500 '> Tailwind Test</h1>
      {/* props can be given like this */}
       < Card1 username='chaiaurcode' someObj = {myObj} someArr = {newArr} />

    </>
  )
}

export default App
