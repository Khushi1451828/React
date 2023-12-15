import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'
function App() {
  const [length,setLength]=useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed] = useState(false)
  const [pass,setPass]=useState('')

  const passwordRef = useRef(null);
  const genPassword = useCallback(()=>{
    let password=""
    let str=
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"
    for(let i=0 ; i<length ; i++)
    {
     const char =  Math.floor(Math.random()*str.length+1)
     password += str.charAt(char)
    }
    setPass(password)
  },[length,charAllowed,numberAllowed])

  useEffect(()=>{
    genPassword()
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard=()=>{
    window.navigator.clipboard.writeText(pass)
    passwordRef.current?.select()
  }
    return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-green-500 font-bold'>
     <h1 className='text-white my-3 text-center'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input
      type='text'
      value={pass}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 hover:bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
     <input type='range'
     min={6}
     max={100}
     value={length}
     className='cursor-pointer' 
     onChange={(e)=>setLength(e.target.value)}
     name=''
     id=''
/>
<label htmlFor='length'>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
    <input type='checkbox'
    defaultChecked={numberAllowed}
    onChange={()=>{
      setNumberAllowed((prev)=>{!prev})
    }}
    name=''
    id=''
    />
    <label htmlFor='number'>Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
    <input type='checkbox'
    defaultChecked={charAllowed}
    onChange={()=>{
      setcharAllowed((prev)=>{!prev})
    }}
    name=''
    id=''
    />
    <label htmlFor='charInput'>Character</label>
      </div>
    </div>
    </div>
  )
}
export default App
