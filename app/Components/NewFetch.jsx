
import Cards from "./Cards";

async function dataFetch(){
     const  data = await fetch("https://sukhinohealth.com/weight-loss-plan/")
     if(!data.ok){
        throw new Error("error 404")
     } return data.json()
}

async function NewFetch() {
    const result = await dataFetch()
    console.log(result);
    
  return (
    <div className="flex flex-wrap">
      {result.map((out)=>(
        <div>
        <Cards title = {out.title} price = {out.price}/>
       
        </div>
      ))}
    </div>
  )
}

export default NewFetch
