import NewTask from "./NewTask";

export default function Tasks({enteredNewTask, tasks}) {

    const getNewValue = (taskName) => {
        enteredNewTask(taskName)
    }

    return (
        <section className="text-left w-[35rem] mt-16">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">Tasks</h1>
            <NewTask newTasksValue={getNewValue}/>
            <ul>
                {
                    tasks.length > 0
                    ?
                    tasks.map(item => <li key={item.projectId}>{item.taskName}</li>)
                    :
                    <p className="text-stone-700 hover:text-stone-950">No active tasks</p>
                }
            </ul>
        </section>
    )
}