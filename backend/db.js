const mongoose = require('mongoose');
const { number, string } = require('zod');

mongoose.connect("mongodb://localhost:27017/");
// mongodb://localhost:27017/paytm

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength:3,
        maxlength:20
    },
    firstName: {
        type: String,
        trim:true,
        required: true,
        maxlength:20
    },
    lastName: {
        type: String,
        trim: true,
        required: true,
        maxlength:20
    },
    password:{
        type: String,
        required: true,
        minLength:4
    }   
})

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',                                         //reference to User Model
        required: true
    },
    accountHolder: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const User = new mongoose.model("User", userSchema)
const Account = new mongoose.model("Account", accountSchema)

module.exports = {
    User,
    Account
};