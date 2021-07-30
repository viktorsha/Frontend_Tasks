import React from "react";
import {styles} from "../../styles";
import MyNotesContainer from "./MyNotesContainer";

export const PersonalNotes = () => {
    return (
        <div>
            <h1 style={styles.motoText}>Personal notes</h1>
            <MyNotesContainer/>
        </div>
    )
}