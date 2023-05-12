import { useEffect, useState } from "react";//58min
import toast from "react-hot-toast";

const ListTasks = ({ tasks, setTasks }) => {
	const [todos, setTodos] = useState([]);
	const [inprogress, setInProgress] = useState([]);
	const [closed, setClosed] = useState([]);
	useEffect(() => {
		const fTodos = tasks?.filter((task) => task.status === "todo");
		const fInProgress = tasks?.filter((task) => task.status === "inprogress");
		const fClosed = tasks?.filter((task) => task.status === "closed");
		console.log(tasks);
		setTodos(fTodos);
		setInProgress(fInProgress);
		setClosed(fClosed);
	}, [tasks]);
	const statuses = ['todo', 'inprogress', 'closed']
	return (
		<div className="flex gap-16">
			{statuses.map((status, index) => (
				<Section
					key={index}
					status={status}
					tasks={tasks}
					setTasks={setTasks}
					todos={todos}
					inprogress={inprogress}
					closed={closed}
				/>
			))}
		</div>
	);
};

export default ListTasks;

const Section = ({ status, tasks, setTasks, todos, inprogress, closed }) => {
	let text = "todo"
	let bg = "bg-slate-500"
	let taskToMap = todos;

	if (status === "inprogress") {
		text = "In progress";
		bg = "bg-purple-500";
		taskToMap = inprogress;
	}

	if (status === "closed") {
		text = "closed";
		bg = "bg-green-500";
		taskToMap = inprogress;
	}
	return (
		<div className={`w-64`}>
			<Header text={text} bg={bg} count={taskToMap?.length} />
			{taskToMap?.length > 0 && taskToMap?.map(task => <Task key={task?.id} task={task} tasks={tasks} setTasks={setTasks} />)}
		</div>
	);
}

const Header = ({ text, bg, count }) => {
	return (
		<div className={`${bg} flex items-center h-12 pl-12 rounded-md uppercase text-sm text-white`}>
			{text}
			<div className="ml-2 bg-white w-5 h-5 text-black rounded-full flex items-center justify-center">
				{count}
			</div>
		</div>

	);
}
const Task = ({ task, tasks, setTasks }) => {
	const handleRemove = (id) => {
		console.log(id);
		const fTasks = tasks?.filter(t => t.id !== id)
		localStorage.setItem("tasks", JSON.stringify(fTasks))
		setTasks(fTasks)
		toast("Task removed", { icon: "💀" })
	}
	return (
		<div className={`relative p-4 mt-8 shadow-md rounded-md cursor-grab`}>
			<p>{task.name}</p>
			<button onClick={() => handleRemove(task.id)} className="absolute bottom-1 right-1 text-slate-400">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
				</svg>
			</button>
		</div>

	);
}


