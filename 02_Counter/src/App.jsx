import { useState } from 'react';
import './App.css'

function App() {

  let [counterValue,setCounter] = useState(0);

  let IncFun = () => {
    if(counterValue < 20){
      setCounter(counterValue+1)
    }
    else return
  }

  let DecFun = () => {
    if(counterValue > 0){
      setCounter(counterValue-1)
    }
    else return
  }

  return (
    <>
    <button type="button" class="btn btn-success" onClick={IncFun}>Increase Counter</button>
    <h1>Counter = {counterValue}</h1>
    <button type="button" class="btn btn-info" onClick={DecFun}>Decrease Counter</button>
    </>
  )
  
}

export default App