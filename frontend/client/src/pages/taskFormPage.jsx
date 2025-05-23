import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


function TaskFormPage() {

  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask } = useTasks();
  const navigate = useNavigate()
  const params = useParams();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id)

        setValue("title", task.title)
        setValue("description", task.description)

      }
    }
    loadTask()

  }, [])

  const onSubmit = handleSubmit((data) => {
    createTask(data);
    navigate("/tasks")


  })



  return (

    <div className="bg-slate-950 min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={onSubmit}
        className="bg-slate-900 max-w-3xl w-full p-10 rounded-md mx-auto"
      >
        {/* Título centrado */}
        <input
          className="block mx-auto bg-zinc-50 text-black px-4 py-2 my-4 rounded-md text-center w-3/4"
          type="text"
          placeholder="Title"
          {...register("title")}
          autoFocus
        />

        {/* Descripción: ocupa casi toda la pantalla */}
        <textarea
          className="bg-zinc-50 text-black px-4 py-3 my-4 rounded-md w-full h-[60vh] resize-none"
          placeholder="Description"
          {...register("description")}
        />

        <button
          type="submit"
          className="bg-zinc-700 cursor-pointer text-white px-4 py-2 rounded-md block mx-auto mt-4"
        >
          Save
        </button>
      </form>
    </div>

  )
}

export default TaskFormPage;