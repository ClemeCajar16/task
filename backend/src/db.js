import mongoose from "mongoose";

export const conectDB = async() =>{

    try {
        await mongoose.connect('mongodb://localhost/merndb');
        console.log("coneccion correcta 🥳");
    } catch (error) {
        console.log(error, "🥴😵")
    }
};

