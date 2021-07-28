import React from "react";
import {styles} from "../../styles";
import ErrorPic from "../../images/ErrorPic.png"

export const NoMatch = () => {
    return (
        <div className={"NotFoundPicContainer"} style={styles.NotFoundPicContainer}>
            <img className={"SpacePic"} src={"https://wallpaperchat.com/walls/full/e/a/d/953387.jpg"} alt={"Not found"}
                 style={styles.SpacePic}/>
            <img className={"NotFoundPic"}
                 src={ErrorPic}
                 alt={"Not found"} style={styles.NotFoundPic}/>
        </div>
    )
}