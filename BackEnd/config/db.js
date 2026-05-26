const mongoose = require("mongoose")

const connectionDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log("Data Base is Connected.. ")
    }catch(error){
        console.log(error)
    }
}

module.exports = connectionDB