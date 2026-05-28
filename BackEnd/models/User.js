const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is Required"],
        minlength:3,
        maxlength:50
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        minlength:8,
        maxlength:20,
        select:false
    },
    role:{
        type:String,
        enum:["student","admin","operations"],
        default:"student"
    },
    profileImg:{
        type:String,
        default:""
    }
},{timestamps:true})

 userSchema.pre("save", async function(next){
   if(!this.isModified("password"))
         return next();
     this.password = await bcrypt.hash(this.password,10);
 });

module.exports = mongoose.model("User",userSchema)