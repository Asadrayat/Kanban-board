import { useEffect, useState } from 'react'

import ListTasks from './Components/ListTasks';
import CreateTasks from './Components/CreateTasks';
import { Toaster } from 'react-hot-toast';

function App() {
	const [tasks, setTasks] = useState([]);
	console.log("tasks", tasks)
	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem("tasks")))
	}, [])
	return (
		<>
			<Toaster />
			<div className='bg-slate-100 w-screen h-screen flex gap-16 flex-col items-center pt-3'>
				<CreateTasks tasks={tasks} setTasks={setTasks}></CreateTasks>
				<ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
			</div>
		</>
	)
}

export default App
