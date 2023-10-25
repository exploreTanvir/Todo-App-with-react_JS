import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import style from "./Home.module.css"
import NewTodo from './NewTodo'
import Todos from './Todos'


const Home = () => {
  const [todos,setTodos]=useState([])
  const handleAddTodo=(todo)=>{
    setTodos((prevTodos)=>{
      return [...prevTodos,{id:uuidv4(),todo}]
    })
  }
  const handleRemoveTodos=(id)=>{
   const filteredTodos=todos.filter((todo)=>todo.id!==id)
   setTodos(filteredTodos)
  }
  return (
    <div className={style.Container}>
      <h1 style={{color:"white"}}>Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo}/>
        <Todos todos={todos} onRemoveTodos={handleRemoveTodos}/>
    </div>
  )
}

export default Home