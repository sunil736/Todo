
"use client"
import React,{useState} from "react"

const page = () => {
  const [Title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const submitHandler= (e)=>{
e.preventDefault()
console.log(Title);
console.log(desc);
setTitle("")
setdesc("")
setmainTask([...mainTask,{Title,desc}]);
  };
  const deleteHandler = (i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)

  };

  let renderTask=<h2>no task available</h2>
 
  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return(
        <li key={i} className="flex items-center justify-between">
          <div className="flex  items-center gap-16
 justify-between">
            <h5>{t.Title}</h5>
            <h6>{t.desc}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}} className=" bg-red-600 text-white rounded"> Delete</button>
        </li>
      )
    }
    )
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl text-center font-bold'> sunil's to do list</h1>
    <form onSubmit={submitHandler}>
      
      <input type="text" className='border-slate-900 border-4 m-5 px-4 py-2 'placeholder='enter task here'
      value={Title}
      onChange={(e)=>{setTitle(e.target.value)}}/>
      <input type="text" className='border-slate-900 border-4 m-5 px-4 py-2' placeholder='enter description here'
      value={desc}
      onChange={(e)=>{setdesc(e.target.value)}}/>
      <button className='bg-black text-white text-2xl text-bold px-3 py-2 m-4'>Add Task</button>
    </form>
    <hr/>
    <div className="p-8 bg-slate-300">
      <ul>
        {renderTask}
      </ul>
    </div>
    
    </>
  )
}

export default page