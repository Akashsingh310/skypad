import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {

  const notesInitial =
    [
      {
        "_id": "64bb6d5181e298f343ab988a",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T05:46:57.499Z",
        "__v": 0
      },
      {
        "_id": "64bb6dd4964f02393cfce496",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T05:49:08.094Z",
        "__v": 0
      },
      {
        "_id": "64bbbcebbd1b9ff3c3c9b026",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T11:26:35.467Z",
        "__v": 0
      },
      {
        "_id": "64bbbcebbd1b9ff3c3c9b026",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T11:26:35.467Z",
        "__v": 0
      }, {
        "_id": "64bb6dd4964f02393cfce496",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T05:49:08.094Z",
        "__v": 0
      },
      {
        "_id": "64bbbcebbd1b9ff3c3c9b026",
        "user": "64ba1f0534750efca69b90d4",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2023-07-22T11:26:35.467Z",
        "__v": 0
      },
    ]

  const [notes, setNotes] = useState(notesInitial)

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;