import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signin, errors: singinErrors, isAuthenticated } = useAuth()
    const navigate = useNavigate(); 

    const onSubmit = handleSubmit((data) => {
        signin(data);
    });

    useEffect(() => {

        if (isAuthenticated) {
            navigate("/tasks");
        }
    }, [isAuthenticated])

    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center  bg-zinc-900">
            <div className="bg-slate-950 max-w-md w-full p-10 rounded-md">

                {
                singinErrors.map((i) => (
                        <div key={i} className='bg-red-500 p-2 my-2 rounded-md text-white'>
                            {"invalid email or password"}  
                        </div>
                    ))}


                <h1 className="text-2xl text-center text-white">Login</h1>
                <form onSubmit={onSubmit}>

                    <input type="email" {...register("email", { required: true })} className='w-full  bg-zinc-400 text-black px-4 py-2 rounded-b-md my-3' placeholder='email' />
                    {errors.email && <p className='text-red-500'>email is required </p>}

                    <input type="password" {...register("password", { required: true })} className='w-full  bg-zinc-400 text-black px-4 py-2 rounded-b-md my-3' placeholder='password' />
                    {errors.password && <p className='text-red-500'>password is required </p>}

                    <button type='submit' className='bg-zinc-500 text-white cursor-pointer px-4 py-2 rounded-md'>
                        Login
                    </button>
                </form>

                <p className="flex gap-x-2 justify-between">
                    don't have an account? 
                    <Link to="/register" className="text-blue-300">
                    Sign up</Link></p>
            </div>
        </div>
    )


}

export default LoginPage