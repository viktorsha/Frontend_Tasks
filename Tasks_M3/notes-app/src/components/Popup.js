import React from "react";
import {Button, Dialog, DialogContent, DialogTitle} from "@material-ui/core";

export default function Popup(props) {
    const {title, children, openPopup, setOpenPopup} = props;
    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h4 style={{margin: 0}}>{title}</h4>
                    <Button variant={"outlined"} color={"primary"} style={{width: "20px", height: "40px"}}
                            onClick={() => setOpenPopup(false)}>X</Button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}