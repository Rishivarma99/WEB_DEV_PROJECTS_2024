import { useState } from 'react'


function App() {
  const [color, changeColor] = useState(0)
  
  return (
    <>
       <h1>hi this </h1>
      <div className='w-full h-full'>

        <div className='buttons min-h-5 min-w-5'>
                 <button className='green bg-green-600' value={green} onClick={ChangeColor}>green</button>
                 <button className='red bg-red-600'>red</button>
                 <button className='black bg-black '>black</button>
                 <button className='blue bg-blue'>blue</button>
                 <button className='brown bg-brown'>brown</button>
                 
        </div>
      </div>
    </>
  )
}

export default App
