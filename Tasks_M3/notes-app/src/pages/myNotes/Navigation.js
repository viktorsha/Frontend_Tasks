import React from "react";
import {BrowserRouter as Router, Link, NavLink, Route, Switch} from "react-router-dom";
import {About} from "./About";
import {SharedNotes} from "./SharedNotes";
import {PersonalNotes} from "./PersonalNotes";
import {styles} from "../../styles";
import {MyNotesContainer} from "./MyNotesContainer";

export const Navigation = () => {
    return (
            <div>
                <nav>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                            <NavLink to="/Frontend_Tasks/my-notes">My Notes</NavLink>
                        </li>
                        <li style={styles.li}>
                            <NavLink to="/Frontend_Tasks/shared-notes">Shared Notes</NavLink>
                        </li>
                        <li style={styles.lastLi}>
                            <NavLink to="/Frontend_Tasks/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}