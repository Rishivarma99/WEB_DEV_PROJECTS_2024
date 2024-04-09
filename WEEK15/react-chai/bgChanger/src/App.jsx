// onclick always wnat a function not its return values just function name 

import { useState } from 'react'

function App() {
  const [color,setColor] = useState('olive')

  return (
    <> 
      <div className='w-100 h-screen' style={{backgroundColor: color}}>

        <div className='w-full fixed flex flex-wrap justify-center bottom-12 px-2  '>
          <div  className=' flex flex-wrap justify-center gap-2 bg-white rounded-3xl p-3' >
            <button onClick={() => setColor("green")}  className='px-4 rounded-full text-white' style={{backgroundColor:'green'}}>Green</button>
            <button onClick= {() => setColor("red") }  className='px-4 rounded-full text-white' style={{backgroundColor:'red'}}>Red</button>
            <button onClick={() => setColor("black")} className='px-4 rounded-full text-white' style={{backgroundColor:'black'}}>Black</button>
            <button onClick={() => setColor("brown")} className='px-4 rounded-full text-white' style={{backgroundColor:'brown'}}>Brown</button>
            <button onClick= {() => setColor("blue")} className='px-4 rounded-full text-white' style={{backgroundColor:'blue'}}>Blue</button>

          </div>
        </div>
      </div>


    </>
  )
}

export default App
