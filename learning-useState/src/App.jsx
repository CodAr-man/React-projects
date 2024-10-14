import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from "react";

export default function App() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])

  //useEffect(, [addData])


  const addData = () => {
      setData(
       data.concat({
          username: username,
          email: email
        })
      );
      setUsername('');
      setEmail('');
      console.log(data);
      
  }

  const deleteHandler = (index) => {
     setData(data.filter((arr) => data.indexOf(arr) != index))
  }

  
  
  return (
    <>
    <div >
    <h1 className ="p-10 bg-slate-700 space-y-11 text-5xl font-bold text-white"> Record Keeping</h1>
    <div className='p-10'>
    <input className = " h-11 space-y-5 rounded-xl" type="text" value= {username} onChange={(e) => setUsername(e.target.value)} name="Username" placeholder='Username'/>
    <input className = " h-11 space-y-5 rounded-xl" type="text" value= {email} name="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
    <button className="h-11 bg-green-500 w-44 rounded-xl" onClick={addData}>Add</button>
    </div>
    <div className='p-10 flex justify-center space-x-48'>
      <h4>Username</h4><h4>Email</h4> <h4> Remove</h4>
      </div>
      <div className>  
      {data.map((arr, index)=>
      <div className='p-10 bg-orange-300 grid grid-cols-3 gap-1 place-content-evenly'>
        <span>{arr.username}</span>
        <span>{arr.email}</span> 
      <span><button className="bg-red-500 size-11 rounded-xl" onClick={() =>  deleteHandler(index)}>Delete</button></span>
      </div>)}
      </div>
    
    </div>
    </>
  )
}