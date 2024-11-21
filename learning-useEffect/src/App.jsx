import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${count}&idStarts=1001`);
      const res = await get.json()
      setData(res)
    }
    getData();
  }, [count])
  

  return (
    <div className='bg-blue-700 h-screen w-screen justify-center items-center'>
    <button className = "bg-lime-400 justify-center  text-stone-950 " onClick={() =>setCount(count+1) }>Click Me {count}</button>
  {
    data.map((e,i)=>{
      return(
        <div className='bg-yellow-600 flex w-full justify-between' key={i}>
        <h4>{e.firstName}</h4>
        <h4>{e.lastName}</h4>
        <h4>{e.email}</h4>
        </div>
      )
    })
  }
  </div>
  )

}

export default App
