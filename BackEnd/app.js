//dotenv
require("dotenv").config()

//express
const express = require("express")
const app = express()

const authRoute = require("./routes/authRoute")

// json middelware
app.use(express.json())

// Routes

app.use("/api",authRoute)

//simple logger
if(process.env.NODE_ENV === "dev"){
    app.use((req,res,next) =>{
        console.log(`${req.method} ${req.originalUrl}`)
        next()
    })
}
//------------------ test ------------------//
// app.get("/test",(req, res) =>{
//     res.json({msg:"Teeeesttt"})
// })

//port
const port = process.env.PORT || 5000

//connection DB
const connectionDB = require("./config/db")
connectionDB()

//run server
app.listen(port, () =>{
    console.log(`Server Running On Port ${port}`)
})
