import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {

  const notesInitial =
    [
      {
        "_id": "64bb6d5181e298f343ab1988a",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T05:46:57.499Z",
        "__v": 0
      },
      {
        "_id": "64bb6dd4964f023923cfce496",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T05:49:08.094Z",
        "__v": 0
      },
      {
        "_id": "64bbbcebbd1b9ff33c3c9b026",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T11:26:35.467Z",
        "__v": 0
      },
      {
        "_id": "64bbbcebbd41b9ff3c3c9b026",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T11:26:35.467Z",
        "__v": 0
      }, {
        "_id": "64bb6dd4964f025393cfce496",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T05:49:08.094Z",
        "__v": 0
      },
      {
        "_id": "64bbbcebbd1b9ff36c3c9b026",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T11:26:35.467Z",
        "__v": 0
      },
    ]

  const [notes, setNotes] = useState(notesInitial)

  // Add a Note
  const addNote = (title, description, tag)=>{
    // TODO: API Call
    console.log("Adding a new note")
    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setNotes(notes.concat(note)) 
  }

  // Delete a Note
  const deleteNote = (id)=>
  {
   
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }
  // Edit a Note
  const editNote = (id, title, description, tag)=>{

  }

  return (
    <NoteContext.Provider value={{notes, addNote,deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;