import { useState, useCallback, useEffect, useRef } from 'react'


function App() { 
const [length, setLength] = useState(6)
const [numAllowed, setNumAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [pass, setPass] = useState("")

const generatePass = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let char = "`~!@#$%^&*()_"
  let  num = "0123456789"
  if (charAllowed) str += char
  if (numAllowed) str += num
  for(let i = 0; i < length; i++) {
    const index = Math.floor((Math.random() * str.length) + 1)
    pass += str.charAt(index);
    }
    setPass(pass);
}, [length, numAllowed, charAllowed])

const passRef = useRef(null);

useEffect(() => {
  generatePass();
}, [length, numAllowed, charAllowed])

const copyPasstoclipBoard = () => {
  window.navigator.clipboard.writeText(pass);
  passRef.current.select();
}

  return (
 <>
<div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-lime-500'>
    
    <h6 className='text-white text-center'> Passwod Generator</h6>
    
    <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
    <input type="text"
    value={pass}
    className='outline-none w-full py-1 px-3' 
    placeholder = "Password"
    ref =  {passRef} />
    
    <button 
    onClick={copyPasstoclipBoard}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '>Copy</button>
    </div>
    
    
    <div  className='flex items-center gap-x-1'>
    <input type="range" className='cursor-pointer'
    min={6}
    max={100}
    value={length}
    onChange={(e) =>setLength(e.target.value) } />
    <label htmlFor="length">Length: {length}</label>

    <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={numAllowed} onChange={() => {setNumAllowed((prev) => !prev)} }  />
    <label htmlFor="number">Numbers</label>
    
    <input type="checkbox" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev)}} />
    <label htmlFor="charInput">Characters</label>
    </div>
    
    
    </div>
</div>
 </>
  )
}

export default App
