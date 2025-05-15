function TaskCard({task}) {
    return(
        <div>
             <div className="bg-zinc-700 max-w-md w-full p-10">
                <h1 className="text-1xl font-bold bg-zinc-800">{task.title}</h1>
                <div>
                    <button>delete</button>
                    <button>edit</button>
                </div>
              
                <p>{task.description}</p>
                <p className="bg-zinc-500">{new Date(task.date).toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default TaskCard;