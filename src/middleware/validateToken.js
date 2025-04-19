import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    
    console.log("Headers:", req.headers);
    console.log("Cookies:", req.cookies); 


    const { token } = req.cookies || {};
    
    if (!token) return res.status(401).json({message: "Unauthorized"});

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({message: "Forbidden"});
      
        req.user = user; 
        console.log("User:", user);
      

        next();
    });
}