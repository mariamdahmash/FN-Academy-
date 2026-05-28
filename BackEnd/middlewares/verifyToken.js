const jwt = require("jsonwebtoken")

const verify = (req, res, next) => {

    const authHeader = req.headers.authorization

    if(!authHeader){

        return res.status(401).json({
            msg:"No Token"
        })

    }

    const token = authHeader.split(" ")[1]

    try{

        const decode = jwt.verify(
            token,
            process.env.SCUREKEY
        )

        req.user = decode

        next()

    }catch(error){

        res.status(403).json({
            msg:"Invalid Token"
        })

    }

}

module.exports = verify