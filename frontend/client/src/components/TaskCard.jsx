import { useTasks } from "../context/TaskContext";
import {Link} from "react-router-dom";

function TaskCard({task}) {
   
   const {deleteTask} = useTasks()
    return(
        <div>
             <div className="bg-slate-950 max-w-md w-full p-10">

                <header className="flex justify-between">
                    <div className="flex gap-x-2 "> 
                    <button onClick= {() => {
                         deleteTask(task._id)
                    }} className="bg-red-700 px-3">delete</button>
                    <Link  to={`/tasks/${task._id}`} className="bg-sky-700 px-5">edit</Link>
                </div>
                </header>

                <h1 className="text-1xl  text-left font-bold">{task.title}</h1>
              
                <p className="text-left">{task.description}</p>
                <p className="text-left bg-zinc-700">{new Date(task.date).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default TaskCard;