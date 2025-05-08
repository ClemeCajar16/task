import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
    
    const {register, handleSubmit} = useForm();
const {signup, user} = useAuth();

console.log(user);

    return(

        <div className='bg-sky-300 max-w-md p-20 rounded-md '>

            <form onSubmit={handleSubmit (async values => {
                signup(values);
             
            })}>
                <input type="text" {...register("username", {required:true})} className='w-full  bg-zinc-700 text-white px-4 py-2 rounded-b-md my-3' placeholder='username'/>
                <input type="email" {...register("email", {required:true})} className='w-full  bg-zinc-700 text-white px-4 py-2 rounded-b-md my-3'placeholder='email'/>
                <input type="password" {...register("password", {required:true})} className='w-full  bg-zinc-700 text-white px-4 py-2 rounded-b-md my-3'placeholder='password' />

                <button type='submit'>
        register
                </button>

            </form>
        </div>
    )
}

export default RegisterPage