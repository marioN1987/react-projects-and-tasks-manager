import { useState } from "react"

export default function NewTask({newTasksValue}) {
    const [newTask, setNewTask] = useState();

    const handleClick = () => {
        newTasksValue(newTask);
        setNewTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={(ev) => setNewTask(ev.target.value)} value={newTask}/>
            <button onClick={handleClick}>Add Task</button>
        </div>
    )
}