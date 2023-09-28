import { useState } from 'react'
import Card from './components/Card'
function App() {
  // let  [counter, setCounter] = useState(0)

  // const addValue = () => {
  //   setCounter(counter => counter+1)                   //simple counter using useState
  // }

  // const remValue = () => {
  //   setCounter(counter => counter-1)
  // }

  let [age, setAge] = useState(0)
  // let type ;

  const bClick = () => {
    setAge=(age => age + 1)
    // type = 'Baby Group'
  }
  return (
    <>
    <div className='bg-black-100 w-screen h-screen flex items-center justify-center'> 
        <button className='outline-none bg-red-600 p-1 rounded-xl px-2' onClick={logged}>Click  Here</button>
    </div>
    </>
  )
}

export default App
