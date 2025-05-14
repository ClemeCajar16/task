import { use, useEffect } from "react";
import { useTasks } from "../context/TaskContext";


function tasksPage() {
     const {getTasks} = useTasks();

     useEffect(() => {

        getTasks();

     }, []);
    

    return (
        <div>
           <h1>task page</h1>
        </div>
    );
}

export default tasksPage;