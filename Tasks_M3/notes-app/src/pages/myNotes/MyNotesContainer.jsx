import React, {useEffect, useState} from "react";
import {NOTES} from "../../constants/index";
import {MyNotes} from "./MyNotes";

const MyNotesContainer = () => {
    const [selectedNote, setSelectedNote] = useState(NOTES[0].id);
    const [openPopup, setOpenPopup] = useState(false);
    const [tableData, setTableData] = useState(NOTES);

    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(tableData))
    }, [tableData]);

    const setCurrentNote = (id) => {
        setSelectedNote(id);
    }

    const changeNote = (chosenNote) => {
        const updatedNotes = tableData.map(note => note.id === chosenNote.id ? chosenNote : note);
        setTableData(updatedNotes);
    }

    return (
        <MyNotes selectedNote={selectedNote} setNote={setCurrentNote} openPopup={openPopup} setOpenPopup={setOpenPopup}
                 changeNote={changeNote} tableData={tableData}/>
    );
}
export default MyNotesContainer;