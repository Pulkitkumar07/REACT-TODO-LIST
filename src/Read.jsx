import { useState } from 'react';
import "./Read.module.css"
import {toast} from 'react-toastify'
const Read = (props) => {
    const todos = props.todos;
    const settodos=props.settodos

    const DeleteHandler=(id)=>{
        const filtertodo=todos.filter((todos)=>todos.id!=id);
        settodos(filtertodo)

        toast.error("Todos Deleted!")
        
    }
    

    const rendertodos = todos.map(todos => {
        return <li className='p-5 flex justify-between  items-center bg-gray-900 rounded mb-5 ' key={todos.id}>
           <span className='text-xl font-thin'> {todos.title}</span>
            <span className='font-thin text-red-400' onClick={()=>DeleteHandler(todos.id)}>Delete</span>
        </li>

    })

    return (
        <div className='flex-col w-[40%] p-10'>
            <h2 className='font-thin text-5xl mb-10'><span className='text-pink-400'>Pending</span> Todos</h2>
            <ol className=''>{rendertodos}</ol>
        </div>
    )
}

export default Read