import React, { useState } from 'react';

export const Add = ({addTodo}) => {
		const[title, setTitle] = useState("");
		const[desc, setDesc] = useState("");
		const submit = (e) => {
				e.preventDefault();
				if(!title || !desc){
						alert("Title or Description cannot be blank");
				}
				else {
				addTodo(title,desc);
				setTitle("");
				setDesc("");
				}
		}
	return (
		<div className="container my-3">
			<h3>Add a todo list</h3>
			<form onSubmit={submit}>
				<div className="mb-3">
					<label htmlFor="Todo list" className="form-label">Todo</label>
				    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" placeholder="Enter Todo list"/>
				</div>
				<div className="mb-3">
					<label htmlFor="desc" className="form-label">Description</label>
					<input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Enter Description"/>
				</div>
				<button type="submit" className="btn btn-outline-primary">Add Todo</button>
			</form>
		</div>
	)
}
