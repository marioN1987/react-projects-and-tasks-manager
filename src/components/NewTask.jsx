import { useState } from "react"

export default function NewTask({onAddTask}) {
    const [newTask, setNewTask] = useState('');

    const handleChange = (e) => {
        setNewTask(e.target.value);
    }

    const handleClick = () => {
        onAddTask(newTask);
        setNewTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={newTask}/>
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}