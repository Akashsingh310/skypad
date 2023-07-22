const express = require('express')
const Note = require('../models/Note')
const router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator');



//ROUTE 1: Get all the notes GET "/api/notes/fetchallnotes"

router.get('/fetchallnotes',fetchUser,async (req,res)=>{
   const notes = await Note.find({user:req.user.id});
   res.json(notes)
})



//ROUTE 2: Add notes POST "/api/notes/addnote"

router.post('/addnote', [
    body('description', 'description must be atleast five characters').isLength({ min: 5 }),
    body('title', 'Enter a valid title').isLength({ min: 3 })
 ], fetchUser ,async (req,res)=>{
    try {
        
        const { title, description, tag } = req.body;

        // If there are errors, return Bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()

        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
 })
 
module.exports =  router