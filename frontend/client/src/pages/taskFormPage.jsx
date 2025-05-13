import { useForm } from "react-hook-form";

function TaskFormPage() {
  
  const {register, handleSubmit} = useForm()
  const onSubmit = handleSubmit((data) => {
  console.log(data)
  })
  
  return (
        <div className="bg-zinc-800 text-zinc-950 max-w-md p-20 rounded-md ">
            <form onAbort={onSubmit}> 
                <input className = "w-full bg-zinc-500 text-amber-50 px4 py-2 my-2 rounded-md" type="text" placeholder="title" {...register("title")} autoFocus/>
                <textarea className="w-full bg-zinc-500  text-white px4 py-3 rounded-md" placeholder="description" {...register("description")}>

                </textarea>
            <button type='submit' className='bg-zinc-700 text-white px-4 py-2 rounded-md'>
                save
            </button>
            </form>
        </div>
    )
}

export default TaskFormPage;