const express = require('express')
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');



//create a user using POST "/api/auth/"
 
router.post('/',[ body('name','Enter a valid Name').isLength({ min: 3 }),
    body('email','Enter a valid Email').isEmail(),
    body('password','Password must be atleast 5 character').isLength({ min: 3 })],(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        User.create({
            name: req.body.name,
            email: req.body.email,
            password : req.body.password,
          }).then(user => res.json(user));
})

module.exports =  router