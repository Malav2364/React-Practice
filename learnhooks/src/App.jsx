import { useState } from 'react'
import Card from './components/Card'
function App() {
  
  return (
    <>
    <div className='bg-black-100 w-screen h-screen flex items-center justify-center'>
        {/* <button className='outline-none bg-red-600 p-1 rounded-xl px-2' onClick={logged}>Click Me</button> */}
        <Card/>
    </div>
    </>
  )
}

export default App
