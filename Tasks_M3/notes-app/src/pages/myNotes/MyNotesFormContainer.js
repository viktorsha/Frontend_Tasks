import React, {useState} from "react";
import {NOTES} from "../../constants";
import moment from "moment";
import MyNotesForm from "./MyNotesForm";

const MyNotesFormContainer = ({id, onChange, setOpenPopup}) => {
    const activeNote = NOTES.find(note => note.id === id);
    const initialValues = {
        id: id,
        title: activeNote.title,
        description: activeNote.description,
        date: activeNote.date
    };

    const [noteValues, setNoteValues] = useState(initialValues);
    const [inputValue, setInputValue] = useState(moment().format("dd.MM.yyyy"));

    const onDateChange = (date, value) => {
        setInputValue(value);
        setNoteValues({
            ...noteValues,
            ["date"]: inputValue
        });
    };

    const handleInputChange = e => {
        const {name, value} = e.target;
        setNoteValues({
            ...noteValues,
            [name]: value
        });
    }
    return (
        <MyNotesForm noteValues={noteValues} handleInputChange={handleInputChange} onDateChange={onDateChange} onChange={onChange} setOpenPopup={setOpenPopup}/>
    );
}

export default MyNotesFormContainer;