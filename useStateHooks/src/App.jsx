import React, { useState } from 'react'

function App() {

  const [name, setName] =useState("Krishn")
  const [age, setAge] = useState(18)

  function onChange(e) {
    setName(e.target.value)
  }

  function changeAge() {
    setAge(age + 1)
  }

  return (  
    <div className='h-screen w-screen duration-200 flex justify-center items-center flex-col'
      style={{backgroundColor: 'black'}}
      >
      <div className='flex  items-center flex-col gap-10'>
          <input type="text" 
            value={name}
            onChange={onChange}
            className='rounded-md bg-blue-300 text-center'
          />
          <button className='bg-blue-300 p-2 rounded-xl' onClick={changeAge}>Increment Age</button>
          <p className='text-white'>Hi, {name} your age is {age} Radhe Radhe!</p>
      </div>
    </div>
  )
}

export default App
