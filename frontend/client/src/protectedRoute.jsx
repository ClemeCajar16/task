import {Navigate, Outlet} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function ProtectedRoute() {
  
  const { loading, isAuthenticated } = useAuth();


if (loading) return <div className="loader">loading...</div>;
  if (!isAuthenticated) return <Navigate to="/login" replace/>;

 
    return (    
        <Outlet />
  );
}

export default ProtectedRoute;
