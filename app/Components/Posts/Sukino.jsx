"use client"

import { useState } from "react"

// async function  fetchdata (){
//   let data = await fetch("https://sukhinohealth.com/weight-loss-plan/",{
//     method: 'POST',
//     header:{
//       'content-Type' : 'application/json',
//     },
    
//   }
// )}
function Sukino() {

  let [value,setvalue] = useState("")


  let isSubmit = (e) =>{
      setvalue = e.target.value
      console.log(value)
  }

// let newdata = fetchdata()
// console.log(newdata)


  return (
    <div className='flex flex-col gap-8 items-center justify-center w-full h-screen'>

<h1>{isSubmit}</h1>
<form className="flex flex-col items-center justify-center" onSubmit={isSubmit} action="">
      <h1>gender</h1>
      <input className='gender border border-red-700 w-[430px]' type="text" />
      <h1>weight</h1>
      <input className='weight border border-red-700 w-[430px]'  type="text" />
      <h1>height</h1>
      <input  className='height border border-red-700 w-[430px]' type="text" />
      <h1>age</h1>
      <input  className='age border border-red-700 w-[430px]' type="text" />
      <h1>activity level</h1>
      <input className='activity_level border border-red-700 w-[430px]'  type="text" />
      <h1>plan</h1>
      <input className='plan border border-red-700 w-[430px]'  type="text" />
      <input className="submit border border-yellow-500 w-[230px] mt-5" type="submit" />
      </form>

    </div>
  )
}

export default Sukino
