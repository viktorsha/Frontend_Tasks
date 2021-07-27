import React, {useEffect, useState} from "react";
import {NOTES} from "../../constants/index";
import {MyNotes} from "./MyNotes";

export const MyNotesContainer = () => {
    const [selectedNote, setSelectedNote] = useState(NOTES[0].id);
    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(NOTES));
    }, [NOTES]);
    const setCurrentNote = (id) => {
        setSelectedNote(id)
    }
    return (
        <div>
            <MyNotes selectedNote={selectedNote} setNote={setCurrentNote}/>
        </div>

    );
}

