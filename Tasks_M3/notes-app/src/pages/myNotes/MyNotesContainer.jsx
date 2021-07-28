import React, {useEffect, useState} from "react";
import {NOTES} from "../../constants/index";
import {MyNotes} from "./MyNotes";

export const MyNotesContainer = () => {
    const [selectedNote, setSelectedNote] = useState(NOTES[0].id);
    const [openPopup, setOpenPopup] = useState(false);
    const [tableData, setTableData] = useState(NOTES)

    useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(tableData));
    }, [tableData]);
    const setCurrentNote = (id) => {
        setSelectedNote(id);
    }
    function changeNote(values){
        setTableData(
            tableData.map(note=>{
                if (note.id===values.id)
                {
                    tableData[values.id-1].title=values.title;
                    tableData[values.id-1].description=values.description;
                    tableData[values.id-1].date=values.date;
                }
                return note;
            })
        )
    }
    return (
        <div>
            <MyNotes selectedNote={selectedNote} setNote={setCurrentNote} openPopup={openPopup} setOpenPopup={setOpenPopup} changeNote={changeNote} tableData={tableData}/>
        </div>

    );
}

