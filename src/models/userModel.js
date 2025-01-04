import mongoose from "mongoose";
import { type } from "os";
const userSchema = new mongoose.Schema({
username:{
    type:"string",
    required: [true,"please provide a username"],
    unique: true,

},
email:{
    type:"string",
    required: [true,"please provide a email"],
    unique: true,
},
password:{
    type:"string",
    required: [true,"please provide a password"],
} ,
isVerfied:{
   type:Boolean,
   default: false,
},
isAdmin:{
    type:Boolean,
    default: false,
},
forgotPasswordToken :String,
forgotPasswordTokenExpiry:Date,
verifyToken :String,
verifyTokenExpiry :Date,

})

const User=mongoose.model.users || mongoose.model("users",userSchema);

export default User;