import {z}from 'zod';

export const registerSchema = z.object({
    username: z.string({required_error:"username is required"}),
    email: z.string({required_error:"email is required"}).email({message:"email is not valid"}),
    password: z.string({required_error: "password is required"}).min(6, {message:"password must be at least 6 characters long"})
}); 

export const loginSchema = z.object({
    email: z.string({required_error:"email is required"}).email({message:"email is not valid"}),
    password: z.string({required_error: "password is required"}).min(6, {message:"password must be at least 6 characters long"})
});

