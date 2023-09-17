import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    username: "Malav Patel",
    age:19
  }

  let newArr = [1,2,3,4]
  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1> */}
      {/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://avatars.githubusercontent.com/u/95128635?v=4" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        Malav Patel
      </div>
      <div>
        Web Developer, India
      </div>
    </figcaption>
  </div>
</figure> */}
  <Card username = "Malav Patel" btnTxt = "Click Me ->"/>
  <Card username = "Malav Part-2" btnTxt = "Visit Me"/>

    </>
  )
}

export default App
