import React from "react";
import {styles} from "../../styles";
import {MyNotesContainer} from "./MyNotesContainer";

export const SharedNotes = () => {
    return (
        <div>
            <h1 style={styles.motoText}>Shared notes</h1>
            <MyNotesContainer/>
        </div>
    )
}