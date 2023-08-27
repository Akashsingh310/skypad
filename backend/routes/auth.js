const express = require('express')
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const fetchUser = require('../middleware/fetchUser')
const JWT_SECRET = "Akashisagood$boy";

//ROUTE 1: create a user using POST "/api/auth/createuser"

router.post('/createuser', [body('name', 'Enter a valid Name').isLength({ min: 3 }),
body('email', 'Enter a valid Email').isEmail(),
body('password', 'Password must be atleast 5 character').isLength({ min: 3 })], async (req, res) => {
let success = false;
  //if there are error return bad request

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
    }


  //check weather user exist already

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({  success , error: "sorry a user exist with this email" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)

    success = true;
    res.status(200).json({ success: success, token: authtoken });
  }
  catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }
})





//ROUTE 2: Authenticate a user using POST "/api/auth/login"

router.post('/login', [
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'Password cannot be blank').exists()
], async (req, res) => {

  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credential" });

    }

    const passwordcompare = await bcrypt.compare(password, user.password);
    if (!passwordcompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET)
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }

})


//ROUTE 3: Get Logged in user details using POST "/api/auth/getuser"
router.post('/getuser',fetchUser,async (req, res) => {

  try {
    const userID = req.user.id;
    const user = await User.findById(userID).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error");
  }

})


module.exports = router