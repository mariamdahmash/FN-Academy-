const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is Required"]
    },
    email:{
        type:String,
        required:[true,"Email is Required"]
    },
    password:{
        type:String,
        required:[true,"Password is Required"]
    }
},{timestamps:true})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);

});