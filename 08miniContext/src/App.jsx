import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>React for context API</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App


//context api and state management -- 
//to share or pass data from on component to another there will be tricky to done that 
//so we make a global component you can say which will be the consumer of the other component's data and provide the data to the required one 
//3 steps
//[1]===>create a context using createContext(the global component one)
//[2]===>provide the context ( for every component to know eveery component that there is a context with all data)
//[3]===>consume the context in child components (consume the context to the child components whoever is need for)

