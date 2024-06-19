import { useState } from 'react';
import './App.css'

function App() {

  let [counterValue,setCounter] = useState(0);

  let IncFun = () => {
    setCounter(counterValue+1)
  }

  let DecFun = () => {
    setCounter(counterValue-1)
  }

  return (
    <>
    <button onClick={IncFun}>Increase Counter</button>
    <h1>Counter = {counterValue}</h1>
    <button onClick={DecFun}>Decrease Counter</button>
    </>
  )
  
}

export default App