import { useState, useCallback, useEffect, useRef } from 'react'


function App() { 
  const [length, setLength ] = useState(6)
  const [checkNum, setNum ] = useState(false)
  const [checkChar, setChar ] = useState(false)
  const [password, setPassword ] = useState("pass")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (checkNum) str +="0123456789";
    if (checkChar) str +="~!@#$%^&*()_+{}:<>?,./;'[]=-`";
    for (let index = 1; index <= length; index++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)      
    }
    setPassword(pass)
    console.log(password);
    
  }, [length, checkNum, checkChar, setPassword])

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
   } , [password] )

useEffect(()=>{passwordGenerator()}, [length, checkNum, checkChar, passwordGenerator])


  return (
  <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
      
      
      <h1 className="text-center text-white my-3">Password Generator</h1>
      
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        
        <input type='text' 
        value = {password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
         ref = {passwordRef}
         />
        <button
        onClick={copyPasswordToClipBoard}>Copy</button>
      </div>
      
      
      <div className='flex text-sm gap-x-2'>
        <div className="flex items-center gap-x-1 ">
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=> setLength(e.target.value) } />
          <label >Length: {length}</label>
        </div>
        
        
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={checkNum}
          id="numberInput"
          onChange={()=>setNum((prev)=>!prev)} />
          <label >Numbers</label>
        </div>
        
        
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={checkChar}
          id="characterInput"
          onChange={()=>setChar((prev)=>!prev)} />
          <label >Characters</label>
        </div>
      
      
      </div>
    </div>

    </>
  )
}

export default App
