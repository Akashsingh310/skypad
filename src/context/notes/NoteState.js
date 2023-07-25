import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name": "Akash",
        "class": "12"
    }
    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Ashutosh",
                "class": "10"
            })
        }, 1000);
    }
    return (
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;