import './App.css';
import Header from "./MyComponent/Header";
import {Todo} from "./MyComponent/Todo";
// import {Footer} from "./MyComponent/Footer";
import React, { useState,useEffect } from 'react';
import {Add} from './MyComponent/Add';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import {Aboutone} from "./MyComponent/Calculator";

function App() {
	let initTodo;
	if(localStorage.getItem("todos")===null){
		initTodo = [];
	}
		else {
			initTodo = JSON.parse(localStorage.getItem("todos"));
		}
	const onDelete = (todo) => {
		console.log("i am delete", todo);
		setTodos(todos.filter((e)=>{
			return e!==todo;
		}));
	localStorage.setItem("todos",JSON.stringify(todos));
	}
	const addTodo = (title,desc) => {
		console.log(" adding todo list",title,desc)
		let sno;	
		if(todos.length ===0){
			sno =0;
		} else {
			 sno = todos[todos.length-1].sno + 1;
		}

		const myTodo = {
			sno: sno,
			title: title,
			desc: desc
		}
		setTodos([...todos,myTodo]);
		console.log(myTodo);
	}	
		const [todos,setTodos] = useState(initTodo);
		useEffect(() => { localStorage.setItem("todos",JSON.stringify(todos)); }, [todos])

  return (
	<>
	
	{/* frm here To-Do List section start to Load it when click on To-Do List link */}
	<Router>
		<Header title="My Component" searchBar={false}/>

		<Switch>
			<Route exact path="/todoList" render = {() => {
				return (
					<>
					<Add addTodo={addTodo}/>
					<Todo todos={todos} onDelete={onDelete}/>
				</>
				)
			}}>
		  	</Route>
{/* frm here about section start to Load it Whem click on Calculator link */}

			<Route exact path="/calculator">
		 	 <Aboutone />
			</Route>

			{/* Only Header component will load */}
			<Route exact path="/calculator">
			</Route>
		
			
	 	</Switch>


		
		{/* <Footer/> */}
	</Router>
	</> 
  );
}

export default App;
