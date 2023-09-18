import { useState } from 'react'

function App() {
  const [color, setColor]  = useState("Black")
  return (
    <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl'>
              <button
               onClick={ () => setColor("red")}
              className='outline-none rounded-full px-4 py-1 text-stone-50 shadow-lg' style={{backgroundColor: "red"}}>Red</button>
              <button 
              onClick={ () => setColor("green")}
              className='outline-none rounded-full px-4 py-1 text-stone-50 shadow-lg' style={{backgroundColor: "green"}}>Green</button>
              <button
              onClick={ () => setColor("purple")}
              className='outline-none rounded-full px-4 py-1 text-stone-50 shadow-lg' style={{backgroundColor: "purple"}}>Purple</button>
              <button
              onClick={ () => setColor("blue")}
              className='outline-none rounded-full px-4 py-1 text-stone-50 shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
          </div>
        </div>
    </div>
  )
}

export default App
