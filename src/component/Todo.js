import React from 'react'
import style from "./Todo.module.css"

const Todo = (props) => {
    const {title,desc}=props.todo
    const {id}=props
    const handleClick=(id)=>{
      props.onRemoveTodos(id)
    }
  return (
    <div className={style.todo}>
        <div>
        <h1>{title}</h1>
        <p>{desc}</p>
        </div>
        <button className={style.btn} onClick={()=>
          {handleClick(id)
        }}><i className='fa fa-trash fa-2x'></i>
        </button>

    </div>
  )
}

export default Todo