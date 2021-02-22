const mongoose = require('mongoose')
const User = require('../models/user')
const express = require('express')
const app = express();

const getUser = async (req, res) => {
    console.log('params on getUser', req.params)
    try {
        const user = await User.findOne({ email: req.params.email, password: req.params.password, name: req.params.name })
        console.log("user on getUser", user)

        if (user) {
            res.status(200).json({ message: 'user login', myUser: user })
           
        } else {
            res.status(400).send('your password or email is not correct')
        }

    } catch (err) {
        res.status(400).send(err)
    }
}
const getAllUsers = async (req, res) => {
    console.log(req.query.name)
    console.log(req.query.password)
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (err) {
        res.status(400).send(err)
    }
}
//
// const checkIfExsist=async (req, res, next)=>{
//     console.log("checkIfExsist")
//     let user=await User.findOne( {"email": req.body.email })
//     if(!user){
//         console.log("user", user)
//         next()
//     }
//    else {
//    res.send("this user is exsist")
//    }

// }

const createUser = async (req, res) => {
            console.log('body on createUser', req.body)

    try {
        let u = await User.findOne({ email: req.body.email })
        if (u)
            res.send("this user is exsist")
        else {
            let newUser = new User(req.body)
            newUser.save()
            console.log("user", user._id)
            res.status(200).json({ message: 'user created ', myUser: newUser })
        }
    }
    catch (err) {
        res.status(400).send(err)
    }

}
   



module.exports = { createUser, getUser, getAllUsers }