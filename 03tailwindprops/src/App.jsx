import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card';
function App() {
  const [count, setCount] = useState(0)
let myObj = {
  name:"khushi",
  age:21,
  address:{
    city:"Alwar",
    state:"Rajasthan",
    country:"India"
  }
}
let newArr=[1,2,3,4,5,5,6,7,8,9]
  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>
        vite with tailwind
      </h1>
      <br/>
      {/* we can pass the array as   -----   myArr= {[1,2,3,4,5,6,7,8,9]} */}
      <Card username="khushi" position="web developer" myArr={newArr}/><br/>
      <Card/><br/>
      <Card username='rahul' position='content writer' />
    </>
  )
}

export default App
