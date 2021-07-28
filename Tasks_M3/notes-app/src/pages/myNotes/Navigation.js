import React from "react";
import {NavLink} from "react-router-dom";

import {styles} from "../../styles";

export const Navigation = () => {
    return (
            <div>
                <nav style={styles.nav}>
                    <ul style={styles.ul}>
                        <li style={styles.li}>
                            <NavLink to="/Frontend_Tasks/my-notes" style={styles.a}>My Notes</NavLink>
                        </li>
                        <li style={styles.li}>
                            <NavLink to="/Frontend_Tasks/shared-notes" style={styles.a}>Shared Notes</NavLink>
                        </li>
                        <li style={styles.lastLi}>
                            <NavLink to="/Frontend_Tasks/about" style={styles.a}>About</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}