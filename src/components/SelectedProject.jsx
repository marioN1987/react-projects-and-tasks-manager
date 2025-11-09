import { useRef, useState } from "react"
import Tasks from "./Tasks";

export default function SelectedProject({project, deleteProject, onAddTask, tasks, onDeleteTask}) {

    return <section>
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <div className="mt-8 text-left">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <p className="text-stone-400 mb-4">{project.dueDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
                </div>
                <button 
                    className="text-stone-700 hover:text-stone-950 self-baseline"
                    onClick={deleteProject}
                >
                    Delete
                </button>
            </div>
        </header>
        <Tasks onAddTask={onAddTask} deleteTask={onDeleteTask} tasks={tasks}/>
    </section>
}