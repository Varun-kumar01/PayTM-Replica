const express = require('express');
const { userSignUpSchema, userSigninSchema, userUpdateSchema} = require('../zodSchemas/userSchema');
const userRouter = express.Router();
const {User, Account} = require("../db");
const jwt = require('jsonwebtoken');
const Jwt_Secret = require('../config');
const { userAuthenticator } = require('../middlewares/userAuth');
const bcrypt = require('bcrypt');


userRouter.post("/signup",async (req,res) => {
    try {
        const body = req.body;

        if(userSignUpSchema.safeParse(body).success){                          //zod verification
            if(await User.findOne({"userName": body.userName})){               //Check for same User
                return res.status(411).json("Email already taken");
            }else{
                const saltRounds = 10;
                body.password = await bcrypt.hash(body.password, saltRounds);
    
                const newUser = await User.create({                            //User created in the database
                    userName: body.userName,
                    firstName: body.firstName,
                    lastName: body.lastName,
                    password: body.password,
                });
    
                const newUserId = newUser._id;
    
                await Account.create({                                         //Giving user a random balance in the accounts db
                    userId: newUserId,
                    accountHolder: body.firstName,
                    balance: Math.floor(1+ (Math.random()*1000))
                })
    
                const token  = jwt.sign({                                      // JWT is assigned using the userId
                    newUserId
                }, Jwt_Secret)
                
                return res.status(200).json({
                    msg: "User created",
                    token: token
                });
            }       
        }else{
            return res.status(411).json("wrong inputs");
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
})


userRouter.post("/signin", userAuthenticator, async (req,res) => {
    try {
        const currentUser = req.body;

        if(userSigninSchema.safeParse(currentUser).success){
            const userFromDB = await User.findOne({_id: req.userId});
            
            if(!userFromDB){               
                return res.status(411).json("User not found, please sign up");
            }else{
                if(currentUser.userName == userFromDB.userName){
                    const passwordVerification = await bcrypt.compare(currentUser.password, userFromDB.password)

                    if(passwordVerification){
                        return res.status(200).json("You have all the access");
                    }else{
                        return res.status(411).json("You entered the wrong password");
                    }
                }else{
                    return res.status(411).json("Invalid username");
                }
                // if(passwordVerification){
                //     if(currentUser.userName == userFromDB.userName){
                //         return res.status(200).json("You have all the access");
                //     }else{
                //         return res.status(411).json("Invalid userName");
                //     }
                // }else{
                //     return res.status(411).json("Wrong password");
                // }
            }
        }
        return res.status(411).json({
            msg:"Enter all the required details"
        })
    } catch (error) {
        return res.status(500).json({msg:" Internal server error"});
    }
})


userRouter.put("/update", userAuthenticator, async (req, res) => {
   try {
        const { success } = userUpdateSchema.safeParse(req.body)
        if(!success){
            return res.status(411).json({
                msg: "invalid inputs to update"
            })
        }
        await User.updateOne({_id:req.userId}, {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName
        });

        return res.json({
            msg: "updated succesfully"
        })
   } catch (error) {
        return res.status(500).json({msg:"Internal server error"});
   }
})


userRouter.get("/bulk", userAuthenticator, async (req, res) => {
    try {
        const body = (req.query.filter || "").trim();

        let allUsers = [];
        
        if(!body){
            allUsers = await User.find({ _id: {$ne: req.userId}})
            // const filteredUsers = await User.find({ firstName: { $ne: "Luka" } });
        }else{
            allUsers = await User.find({
                $and:[
                    {"firstName":{ $regex: body, $options: "i" }},
                    {_id: {$ne: req.userId}}
                ]
            })
        }
    
        if(allUsers.length > 0){
            return res.status(200).json({
                users: allUsers.map((user) => {
                    // if(user.id != req.userId){
                        return {
                            id: user._id,
                            userName: user.userName,
                            firstName: user.firstName,
                            lastName: user.lastName
                        }
                    // }
                })
            })
        } 
        return res.json({
            msg: "User not found"
        })
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error"
        })
    }
})


module.exports = {
    userRouter
}