import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function protectedRoute() {
  
  const { loading, isAuthenticated } = useAuth();
console.log(loading,isAuthenticated);

if (loading) return <div className="loader">loading...</div>;
  if (!loading && !isAuthenticated) return <Navigate to="/login" replace/>;


    return (    
        <Outlet />
  );
}

export default protectedRoute;
