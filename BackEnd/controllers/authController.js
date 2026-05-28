const express = require("express");
const User = require("../models/User");
const bycrpt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json({ msg: "User Created", user });
  } catch (error) {
    res.status(500).json({ msg: "Server Error", error: error.msg });
  }
};

const login = async (req, res) =>{
    try{
        const userExiste = await User.findOne({
            email: req.body.email
        }).select("+password")

        if(!userExiste){
            return res.status(403).json({msg:"User Not Auth"})
        }
        const validPassword = await bycrpt.compare(
            req.body.password,
            userExiste.password
        )

        if(!validPassword){
            return res.status(400).json({msg:"Wrong Password"})
        }
        
        const token = jwt.sign(
         {
            id:userExiste._id,
            role:userExiste.role
         },process.env.SCUREKEY,{expiresIn:"7d"}
      )


    }catch(error){
        res.status(500).json({msg:"Server Error",error: error.msg})
    }
}
module.exports ={
    register,
    login
}