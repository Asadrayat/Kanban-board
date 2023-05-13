import { useEffect, useState } from 'react'

import ListTasks from './Components/ListTasks';
import CreateTasks from './Components/CreateTasks';
import { Toaster } from 'react-hot-toast';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
	const [tasks, setTasks] = useState([]);
	console.log("tasks", tasks)
	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem("tasks")))
	}, [])
	return (
		<DndProvider backend={HTML5Backend}> {/* Setting up the Drag and Drop Context from react DND documentation */}
			<Toaster />
			<div className='w-screen h-screen flex gap-16 p-3 flex-col items-center pt-32'>
				<CreateTasks tasks={tasks} setTasks={setTasks}></CreateTasks>
				<ListTasks tasks={tasks} setTasks={setTasks}></ListTasks>
			</div>
		</DndProvider>
	)
}

export default App
