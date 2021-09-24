import React from 'react'
import {TodoItem} from "../MyComponent/TodoItem";

export const Todo = (props) => {
   return (
      <div className="container">
       <h3>Todo List</h3>
       {props.todos.length===0? "todo list is empty": 
         props.todos.map((todo) => {
		 
           return (
		   <>
		   <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/> 
		   </>
	   )
       })
      }
      </div>
   )
}
