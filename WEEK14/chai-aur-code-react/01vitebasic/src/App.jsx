
// components 
// export Chai function from chai file 
import Chai from "./chai"

function App() {
  // using variable and inserting into html using { }
  const var1 = "chai aur rishi "
  return (
    <>
   <Chai />
   <h2>Other tags of html using fragments by {var1} </h2>
    </>
  )
}
export default App
