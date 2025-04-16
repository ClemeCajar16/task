import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js"; // ✅ correcto

export const register = async (req, res) =>{
    const {email, password, username} = req.body;

  try {

    const paswordHash = await bcryptjs.hash(password, 10)
    const newUser = new User({
        email,
        username,
        password: paswordHash
        
    })
    
    const userSaved = await newUser.save();
    const token = await createAccessToken({id: userSaved._id});

res.cookie('token', token);

    res.json({
        id: userSaved._id,
        username:userSaved.username,
        email:userSaved.email, 
        createdAt:userSaved.createdAt,
        updatedAt:userSaved.updatedAt
    });

  }catch (error) {
    res.status(500).json({
        message: "Error al registrar el usuario",
        error: error.message,
    });
  }

};
export const login = (req, res) => res.send("login");
