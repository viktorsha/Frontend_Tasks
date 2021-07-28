import React from "react";
import {styles} from "../../styles";

export const NoMatch = () => {
    return(
       <div className={"NotFoundPicContainer"} style={styles.NotFoundPicContainer}>
           <img className={"SpacePic"} src={"https://wallpaperchat.com/walls/full/e/a/d/953387.jpg"} alt={"Not found"} style={styles.SpacePic}/>
           <img className={"NotFoundPic"} src="https://www.artzstudio.com/wp-content/uploads/2020/05/404-error-not-found-page-lost-1024x788.png" alt={"Not found"} style={styles.NotFoundPic}/>
        </div>
    )
}