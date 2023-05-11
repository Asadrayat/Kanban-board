import { useEffect, useState } from "react";

const ListTasks = ({tasks, setTasks}) => {
	const [todos,setTodos]= useState([]);
	const [inprogress,setInprogress]= useState([]);
	const [close,setClosed]= useState([]);

	useEffect(() =>{
		const fTodos = tasks.filter((task) => task.status === "todos");
		const fInProgress = tasks.filter((task) => task.status === "inProgress");
		const fClosed = tasks.filter((task) => task.status === "closed");
		setTodos(fTodos);
		setTodos(fInProgress);
		setTodos(fClosed);
	},[tasks]);
	return (
		<div>
			List
		</div>
	);
};

export default ListTasks;