
import { useState } from 'react'
import './App.css'

function App() {
 const [color, setColor] = useState("olive")

  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap bottom-12 justify-center
      inset-x-0 px-2'>
        <div className='flex flex-wrap justofy-center gap-3 shadow-lg bg-white  px-3 py-2 rounded-3xl'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "red"}}>red</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "blue"}}>blue</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 rounded-full text-white'
          style={{backgroundColor: "green"}}>green</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
