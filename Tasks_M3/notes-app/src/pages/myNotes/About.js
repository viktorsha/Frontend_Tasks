import React from "react";
import {Navigation} from "./Navigation";
import {styles} from "../../styles";

export const About = () => {
    return(
        <div>
            <h1 className={"motoText"} style={styles.motoText}>IT'S TIME YOU MAKE YOUR LIFE NOTICEABLE</h1>
            <h3 className={"motoDescriptionText"} style={styles.motoDescriptionText}>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</h3>

                <main>
                    <div className={"mainContainer"} style={styles.mainContainer}>
                        <img src="https://evernote.com/c/assets/homepage-repackaging/task_hero_image@2x__en.png?465752cfb86f86f4" alt={"Main picture"} style={styles.notesAppPicture}/>
                        <div className={"siteDescription"} style={styles.siteDescription}>
                            <ul>
                                <li>
                                    <p className={"site-description__name"}>WORK ANYWHERE</p>
                                    <p className={"site-description__text"}>Keep important info handy—your notes sync automatically to all your devices.</p>
                                </li>
                                <li>
                                    <p className={"site-description__name"}>REMEMBER EVERYTHING</p>
                                    <p className={"site-description__text"}>Make notes more useful by adding text, images, audio, scans, PDFs, and documents.</p>
                                </li>
                                <li>
                                    <p className={"site-description__name"}>TURN TO-DO INTO DONE</p>
                                    <p className={"site-description__text"}>Bring your notes, tasks, and schedules together to get things done more easily.</p>
                                </li>
                                <li>
                                    <p className={"site-description__name"}>FIND THINGS FAST</p>
                                    <p className={"site-description__text"}>Get what you need, when you need it with powerful, flexible search capabilities.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </main>


        </div>
    )
}