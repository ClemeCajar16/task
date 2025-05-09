import { useForm } from "react-hook-form";

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center  bg-zinc-900">
           <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <h1 className="text-2xl text-center text-white">Login</h1>
                <form onSubmit={onSubmit}>

                <input type="email" {...register("email", { required: true })} className='w-full  bg-zinc-400 text-black px-4 py-2 rounded-b-md my-3' placeholder='email' />
                {errors.email && <p className='text-red-500'>email is required </p>}

                    <input type="password" {...register("password", { required: true })} className='w-full  bg-zinc-400 text-black px-4 py-2 rounded-b-md my-3' placeholder='password' />
                    {errors.password && <p className='text-red-500'>password is required </p>}

                    <button type='submit' className='bg-zinc-500 text-white px-4 py-2 rounded-md'>
                        Login
                    </button>
                </form>
           </div>
        </div>
    )


}

export default LoginPage