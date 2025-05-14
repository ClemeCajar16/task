import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js"; 
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) =>{
    const {email, password, username} = req.body;

  try {

   const userFound = await User.findOne({email})
   if (userFound) return  status(400).json({"message": "El usuario ya existe"});

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


export const login = async (req, res) =>{
    const {email, password} = req.body;

  try {

    const userFound =  await User.findOne({email})
    if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})

    const isMatch = await bcryptjs.compare(password, userFound.password)
if (!isMatch) return res.status(400).json(["Contraseña incorrecta"])

    
    const token = await createAccessToken({id: userFound._id});

res.cookie('token', token, {
  cameSite: "none",
  secure: true,
});

    res.json({
        id: userFound._id,
        username:userFound.username,
        email:userFound.email, 
        createdAt:userFound.createdAt,
        updatedAt:userFound.updatedAt
    });

  }catch (error) {
    res.status(500).json({
        message: "Error al registrar el usuario",
        error: error.message,
    });
  }};


export const logout = (req, res) =>{
  res.cookie("token", '',{
     expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) =>{
 
 const userFound = await User.findById(req.user.id);

 if (!userFound) return res.status(400).json({message: "Usuario no encontrado"});

 return  res.json({
    id: userFound._id,
    username:userFound.username,
    email:userFound.email, 
    createdAt:userFound.createdAt,
    updatedAt:userFound.updatedAt
 });
}

export const verifyToken = async (req, res) => {
  const {token} = req.cookies;

if (!token) return res.status(401).json({message: "unauthrized"});

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({message: "unauthrized"});
 
    const userFound = await User.findById(user.id) 
    if(!userFound) return res.status(401).json({message: "unauthrized"});
 
 return res.json({
    id: userFound._id,
    username:userFound.username,
    email:userFound.email})
    
  })
}
