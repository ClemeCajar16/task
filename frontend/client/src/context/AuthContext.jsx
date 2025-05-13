import { createContext, useState, useContext, useEffect  } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth.js";
import Cookies from "js-cookie";


export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
const [loading, setLoading] = useState(true);


  const signup = async (user) => {
    try {

      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data);
      setIsAuthenticated(true);

    } catch (error) {
      const err = error.response?.data?.message;
      if (Array.isArray(err)) {
        setErrors(err);
      } else if (err) {
        setErrors([err]);
      } else {
        setErrors(["Error desconocido"]);
      }
    }

  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setIsAuthenticated(true);
      setUser(res.data);

    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
    }
  }

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();
  
      if (!cookies.token)  {
        setIsAuthenticated(false)
        setUser(null);
      }
  
      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data)  {
            setIsAuthenticated(false);
            setUser(null);
            return;
        }
       
        setIsAuthenticated(true);
        setUser(res.data);

      } catch (error) {
        
          setIsAuthenticated(false);
        setUser(null);

      }finally {
        setLoading(false);
      }
    }
  
    checkLogin();
  }, []);
  

  return (
    <AuthContext.Provider value={{ user, signup, signin, loading, isAuthenticated, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
