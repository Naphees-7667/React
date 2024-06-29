import { useState } from 'react'

import './App.css'

function App() {

  let count = 0
  let [name , setName] = useState("Password Generator");

  return (
    <>
      <h1 className='text-4xl text-center text-white'>{name}</h1>
      
    </>
  )
}
export default App