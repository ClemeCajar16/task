import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    username:{
        String,
        required:true,
        trim: true
    },
    email: {
        String,
        required:true,
        trim: true,
        unique: true
    },
    password:{
        String,
        required:true
    }
});

export default mongoose.model('User', userSchema);