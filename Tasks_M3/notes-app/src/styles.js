import React from "react";
import {makeStyles} from "@material-ui/core";

export const styles = {
    tableGrid: {
        display: "flex",
        justifyContent: "center"
    },
    cardName: {
        display: "flex",
        justifyContent: "center"
    },
    container: {
        display: "flex",
        justifyContent: "space-between"
    },
    saveChangesBtn: {
        marginLeft: "7px"
    },
    descriptionField: {
        marginLeft: "10px",
        width: "300px",
        font: "inherit"
    },
    EditBtn: {
        display: "flex"
    },
    ul: {
        display: "flex",
        justifyContent: "flex-end",
        listStyleType: "none"
    },
    li: {
        marginLeft: "20px"
    },
    a: {
        textDecoration: "none",
        padding: "5px 5px 5px 5px",
        borderStyle: "solid",
        borderWidth: "2px",
        borderRadius: "8px",
        borderColor: "#4f953f"
    },
    lastLi: {
        marginLeft: "20px",
        marginRight: "30px"
    },
    motoText: {
        display: "flex",
        justifyContent: "center"
    },
    motoDescriptionText: {
        display: "flex",
        justifyContent: "center"
    },
    notesAppPicture: {
        display: "flex",
        justifyContent: "center",
        width: "800px",
        height: "600px"
    },
    siteDescription: {
        display: "flex",
        justifyContent: "flex-end"
    },
    mainContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "row"
    },
    NotFoundPicContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },
    SpacePic: {
        position: "absolute",
        top: 55,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.5,
        width: "100%",
        height: "100%"
    },
    NotFoundPic: {
        position: "absolute",
        top: "80px",
        left: "350px"
    },
    nav: {
        marginBottom: "40px"
    },
    dialogContainer: {
        display: "flex",
        justifyContent: "space-between"
    },
    dialogContainer__text: {
        margin: 0
    },
    dialogContainer__closeButton: {
        width: "20px",
        height: "40px"
    }
}
export const useStyle = makeStyles(theme => ({
    root: {
        "& .MuiFormControl-root": {
            width: "80%",
            margin: theme.spacing(1)
        }
    }
}))