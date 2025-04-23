const Jwt_Secret = require("../config");
const jwt = require('jsonwebtoken');


const  userAuthenticator = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json("user not found, please signup");
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, Jwt_Secret);
        req.userId = decoded.newUserId    
        next();
    } catch (error) {
        return res.status(401).json("wrong inputs")
    }
     
}

module.exports = {
    userAuthenticator
}