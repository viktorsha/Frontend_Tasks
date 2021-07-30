import React from "react";
import {Button, Dialog, DialogContent, DialogTitle} from "@material-ui/core";
import {styles} from "../styles";

const Popup = ({title, children, openPopup, setOpenPopup}) => {
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div className="dialogContainer" style={styles.dialogContainer}>
                    <h4 className="dialogContainer__text" style={styles.dialogContainer__text}>{title}</h4>
                    <Button className="dialogContainer__closeButton" variant={"outlined"} color={"primary"} style={styles.dialogContainer__closeButton}
                            onClick={() => setOpenPopup(false)}>X</Button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup;