const express = require('express')
const User = require('../models/User')
const router = express.Router();


//create a user using POST "/api/auth/"
 
router.post('/',(req,res)=>{
    console.log(req.body);
    const user = User(req.body);  //for using req body we have to use middle ware i have put it on index.js
    user.save()
    res.send(req.body);
})

module.exports =  router