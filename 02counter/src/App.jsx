import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]= useState(7)
// let counter = 7
const addValue = () =>{
  // setCounter(counter+1)
  //callbackfunction returns the bundle of multiple execution
  //it gives counter+4 on every click
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  setCounter((prevCounter)=>prevCounter+1)
  
}
const removeValue = () =>{
  setCounter(counter-1)
}
  return (
    <>
     <h1>recat course {counter}</h1>
     <h2>counter value : {counter}</h2>
     <button
     onClick={addValue}
     >Add value</button>{" "}
     <button
     onClick={removeValue}
     >remove value</button>
     <p>footer {counter}</p>
    </>
  )
}

export default App
