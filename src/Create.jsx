import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {toast} from 'react-toastify'

import './Create.module.css'

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const { register,
    handleSubmit,
    reset,
    formState: { errors } } = useForm();

  const submitHandler = (data) => {
    data.iscompleted=false;
    data.id=nanoid();
    
    const copytodos=[...todos];
    copytodos.push(data);
    settodos(copytodos);
    
    toast.success('Todo Created!')

   reset();

  }


  return (
    <div className=' w-[60%] p-10  '>
      <h2 className='font-thin text-5xl mb-10'>Set <span className='text-red-400'>Reminders </span>for  <br />tasks</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register('title', { required: "Title cannot be empty" })}
          className='border-b w-full outline-0 text-2xl font-thin mb-15'
          type="text"
          placeholder='title' />
         <small className='font-thin text-red-400'>{errors?.title?.message}</small>
        <br />
        <br />
        <button className='text-xl px-10 py-2 border rounded'> Create Todo</button>
      </form>
    </div>
  )
}

export default Create