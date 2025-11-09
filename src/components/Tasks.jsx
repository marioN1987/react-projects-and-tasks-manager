import NewTask from "./NewTask";

export default function Tasks({onAddTask, tasks, deleteTask}) {

    return (
        <section className="text-left w-[35rem] mt-16">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">Tasks</h1>
            <NewTask onAddTask={onAddTask}/>
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {
                    tasks.length > 0
                    ?
                    tasks.map(task => <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button 
                            className="text-stone-700 hover:text-red-500 "
                            onClick={(e) => deleteTask(task.id)}
                        >
                            Clear
                        </button>
                    </li>)
                    :
                    <p className="text-stone-700 hover:text-stone-950">This project does not have any tasks yet.</p>
                }
            </ul>
        </section>
    )
}