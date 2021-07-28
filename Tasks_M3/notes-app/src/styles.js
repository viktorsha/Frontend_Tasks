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
    ul:{
        display: "flex",
        justifyContent: "flex-end"
    },
    li:{
        marginLeft: "30px"
    },
    lastLi: {
        marginLeft: "30px",
        marginRight: "30px"
    }
}
export const useStyle = makeStyles(theme=> ({
    root: {
        "& .MuiFormControl-root": {
            width: "80%",
            margin: theme.spacing(1)
        }
    }
}))