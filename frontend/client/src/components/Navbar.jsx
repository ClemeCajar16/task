import { useAuth } from "../context/AuthContext";

function Navbar(){
;
    const {isAuthenticated, logout} = useAuth();

    return(
       <nav className="w-full max-w-6xl flex justify-between items-center py-4 px-6 bg-gray-800 rounded-2xl shadow-md mb-8">

            <a href="/">
                    <h1 className="text-2xl font-bold">tasks manager</h1>
            </a>
            <ul className="flex gap-x-8">
             
                <li><a className="font-bold" href="/">home</a></li>

                {isAuthenticated ? (
                    <>
                <li><a className="font-bold" href="/add-task">add tasks</a></li>
                <li><a className="font-bold" href="/" onClick={() => {
                    logout();
                }}>logout</a></li>
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