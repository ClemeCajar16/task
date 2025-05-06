import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
    
    console.log("Headers:", req.headers);
    console.log("Cookies:", req.cookies); 


    const authHeader = req.headers.authorization;
    const token = authHeader?.split(" ")[1] || req.cookies.token;

    if (!token) return res.status(401).json({message: " no encontrada 😥"});

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({message: "error 😫"});
      
        req.user = user; 
        console.log("User:", user);
      

        next();
    });
}