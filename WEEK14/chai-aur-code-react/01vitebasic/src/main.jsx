import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// we can also create here and render 
function MyApp() {
  return (
    <>
   <h2>Other tags of html using fragments </h2>
    </>
  )
}

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// CREATING REACT ELEMENT : 
const username2 = " rishi with chai" ;
const reactElement = React.createElement(
  "a",
  { href:'https://google.com', target : '_blank' },
  'click me to visit google'
  ,username2
)
// THE ABOVE CODE CONVERTS LIKE THIS 

// const reactElement = {
//   type : 'a',
//   props:{
//       href : 'https://google.com',
//       target : '_blank'
//   }
//   ,
//   children : 'click me to visit google'
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <App />
    reactElement  // not working - the syntax is not correct  
    // anotherElement   // working 
    
)


