const express = require('express');
const { Account } = require('../db');
const { userAuthenticator } = require('../middlewares/userAuth');
const accountRouter = express.Router();
const mongoose = require("mongoose");



accountRouter.post("/transfer",userAuthenticator,async (req,res) => {
    const session = await mongoose.startSession();

    try {
        const { to, amount } = req.body;

        //Check for the postive inputs
        if (typeof amount !== "number" || amount <= 0) {
            return res.status(400).json({ message: "'amount' must be a positive number" });
        }

        session.startTransaction();
    
        // Fetch sender's account
        const fromAccount = await Account.findOne({ userId: req.userId }).session(session);
        // console.log(fromAccount)
    
        // Fetch recipient's account
        const toAccount = await Account.findOne({ userId: to }).session(session);

        console.log(toAccount)
        if (!toAccount || !fromAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account"
            });
        }

        if (fromAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }
    
        // Perform the transfer (without transactions)
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        await session.commitTransaction();
        // session.endSession();
    
        res.json({ message: "Transfer successful" });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        return res.status(500).json({
            error: error.message
        })
    }
    finally {
        session.endSession();
    }
});


accountRouter.get("/balance",userAuthenticator,async (req,res) => {
    try { 
        console.log("typeof req.userId =", typeof req.userId);
        const currentUser = await Account.findOne({
            userId: req.userId
        })
        return res.status(200).json({
            message: `your account balance is ${currentUser.balance}`
        })
    } catch (error) {
        return res.status(500).json({
            msg: error
        })
    }
})


module.exports = {
    accountRouter
}

