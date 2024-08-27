
function dataFetch(){
    
}



function ApiIntegration() {
  return (
    <div className='flex flex-col gap-2 items-center justify-center w-full h-screen'>


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
  


      <button  button className='submit border border-red-700 w-[430px]'>SUBMIT</button>
    </div>
  )
}

export default ApiIntegration
