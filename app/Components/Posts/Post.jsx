
async function serverSideFetch(){
   const res = await fetch("https://jsonplaceholder.typicode.com/posts")

   if(!res.ok){
    throw new Error("Err 404")
   }
   return res.json()
}



async function Post(){
    const data = await serverSideFetch()
    console.log(data);
    
  return (
    <div>
      {data.map((post)=>(
        <div key={post.id}>
          <h1>{post.title}</h1>
          </div>
      ))}
    </div>
  )
}


export default Post