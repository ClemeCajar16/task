import { useForm } from "react-hook-form";

function TaskFormPage() {
  
  const {register, handleSubmit} = useForm()
  const onSubmit = handleSubmit((data) => {
  console.log(data)
  })
  
  return (
        <div>
            <form onAbort={onSubmit}> 
                <input type="text" placeholder="title" {...register("title")} autoFocus/>
                <textarea placeholder="description" {...register("description")}>

                </textarea>
            <button>
                save
            </button>
            </form>
        </div>
    )
}

export default TaskFormPage;