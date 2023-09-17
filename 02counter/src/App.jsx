import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter, setCounter]  = useState(0)  //it updates the state everywhere in the page 

//  let counter = 0

  const addValue = () => {
    counter = counter + 1
    // console.log(counter)
    setCounter(counter)    
  }

  const removeValue = () => {
    counter = counter-1
    setCounter(counter)
  }

  return (
    <>
      <h1>Malav React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br />      
      <br />      
      <button
        onClick={removeValue}
      >Remove Value</button>      

    </>
  )
}

export default App
