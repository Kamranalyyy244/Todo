import React, { useState } from 'react'

const ToDo = () => {

    const [popup,setPopup] = useState(false);
    const [Todo, setTodo] = useState([]);
    const [Title, setTitle] = useState();
    const [Desc, setDesc] = useState();
    const [Due, setDue] = useState();

    const addtodo = () => {
      if(!Title || !Desc || !Due )
        return 
        setTodo([...Todo,{Title,Desc,Due}]);
        setPopup(false)
    }

  return (
    <div className='p-4 max-w-5xl mx-auto mt-11' >
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>TODO LIST</h1>
          <button onClick={()=>setPopup(true)} className='bg-sky-500 hover:bg-sky-700 cursor-pointer rounded-3xl text-white text-xl h-10 w-25' >Add + </button>
        </div>

        {/* title */}

        <div className='border rounded flex text-center text-xl font-bold  mt-10' >
            <h1 className='border-r-1 pt-1  w-70 h-10' >Title</h1>
            <h1 className='border-r-1 pt-1 w-110 h-10 ' >Description</h1>
            <h1 className='w-60 h-10 pt-1 ' >DueDate</h1>
        </div>

        {Todo.length > 0 ? (Todo.map((todo,index)=>(
          <div key={index} className='flex flex-col md:flex-row border-gray-300 border md:border-t-0 rounded-md md:rounded-none mt-4 md:mt-0 ' >
            <div className='md:w-70 md:border-r border-gray-300 p-2 text-center ' >{todo.Title}</div>
            <div className='md:w-110 md:border-r border-gray-300 p-2 text-center ' >{todo.Desc}</div>
            <div className='md:w-60 p-2 text-center ' >{todo.Due}</div>

          </div>
          ))) : (<p className='mt-4 text-gray-500' >No Todos yet.Add one!</p>) }

        {/* popup */}

        {popup && (
            <div className='fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center p-4'>
              <div className='bg-white  p-6 shadow-lg w-full max-w-md rounded '>
                <h2 className='text-xl font-bold ' >Add New ToDo</h2>
                <input type="text" placeholder='Title' className=' border rounded w-full mt-4 p-2' value={Title} onChange={(e)=>setTitle(e.target.value)} />
                <input type="text" placeholder='Description' className=' border rounded w-full mt-4 p-2 ' value={Desc} onChange={(e)=>setDesc(e.target.value)}  />
                <input type="date" placeholder='Title' className=' border rounded w-full mt-4 p-2 ' value={Due} onChange={(e)=>setDue(e.target.value)} />
                <div className='flex justify-end gap-2 mt-5' >
                  <button className='border cursor-pointer rounded w-20 h-8 text-black' onClick={()=>setPopup(false)} >Cancel</button>
                  <button className='bg-sky-500 hover:bg-sky-700 cursor-pointer rounded w-20 h-8 text-white' onClick={addtodo} >Add</button>
                </div>
              </div>

            </div>
        )}

    </div>
  )
}

export default ToDo