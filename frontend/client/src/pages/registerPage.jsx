import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RegisterPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated } = useAuth();
    const { errors: registerErrors } = useAuth();
    const navigation = useNavigate();


    useEffect(() => {
        if (isAuthenticated) {
            navigation('/tasks')
        }
    }, [isAuthenticated])

    return (

        <div className="flex items-center justify-center min-h-screen">

        <div className='bg-zinc-800 max-w-md p-20 rounded-md'>

            <h1 className="text-2xl text-center text-white">register</h1>

            {Array.isArray(registerErrors) &&
                registerErrors.map((error, i) => (
                    <div key={i} className='bg-red-500 p-2 my-2 rounded-md text-white'>
                        {error}
                    </div>
                ))}



            <form onSubmit={handleSubmit(async values => {
                signup(values);

            })}>



                <input type="text" {...register("username", { required: true })} className='w-full  bg-zinc-400 text-black px-4 py-2 rounded-b-md my-3' placeholder='username' />
                {errors.username && <p className='text-red-500'>username is required </p>}

                <input type="email" {...register("email", { required: true })} className='w-full  bg-zinc-400 text-black px-4 py-2 rounded-b-md my-3' placeholder='email' />
                {errors.email && <p className='text-red-500'>email is required </p>}

                <input type="password" {...register("password", { required: true })} className='w-full  bg-zinc-400 text-black px-4 py-2 rounded-b-md my-3' placeholder='password' />
                {errors.password && <p className='text-red-500'>password is required </p>}


                <button type='submit' className='bg-zinc-500 text-white cursor-pointer px-4 py-2 rounded-md'>
                    register
                </button>

            </form>

            <p className="flex gap-x-2 justify-between">
                    Already have an account? 
                    <Link to="/login" className="text-blue-300">
                    login</Link></p>

        </div>
        </div>
    )
}

export default RegisterPage