import { useAuth } from "../context/AuthContext";

function Navbar(){

    const {isAuthenticated} = useAuth();

    return(
       <nav className="bg-zinc-600 my-3 flex justify-between py-0 px-10">

            <a href="/">
                    <h1 className="text-2xl font-bold">tasks manager</h1>
            </a>
            <ul className="flex gap-x-8">
             
                <li><a className="font-bold" href="/">home</a></li>

                {isAuthenticated ? (
                    <>
                <li><a className="font-bold" href="/add-tasks">add tasks</a></li>
                <li><a className="font-bold" href="/add-tasks">logout</a></li>
                    </>
            ) : (
                    <> 
                    <li><a className="font-bold" href="/login">login</a></li>
                <li><a className="font-bold" href="/register">register</a></li>
                    </>
                )}

            </ul>
        </nav>
    )
}
 
export default Navbar;