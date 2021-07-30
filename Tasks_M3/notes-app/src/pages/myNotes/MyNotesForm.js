import React from "react";
import {Button, Grid, TextareaAutosize, TextField} from "@material-ui/core";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import {styles, useStyle} from "../../styles";

const MyNotesForm = ({onChange, setOpenPopup, onDateChange, handleInputChange, noteValues}) => {
    const classes = useStyle();
    return (
        <div>
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField variant={"outlined"} label="Title" value={noteValues.title} name="title"
                                   onChange={handleInputChange}/>
                        <TextareaAutosize className={"descriptionField"} variant={"outlined"} label="Description"
                                          name="description" value={noteValues.description} style={styles.descriptionField}
                                          onChange={handleInputChange}/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker variant={"inline"} format={"dd.MM.yyyy"} inputValue={noteValues.date}
                                                name="date" onChange={onDateChange} KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}/>
                        </MuiPickersUtilsProvider>
                        <Button variant={"outlined"}
                                color={"primary"}
                                className={"saveChangesBtn"}
                                style={styles.saveChangesBtn}
                                onClick={() => {
                            onChange(noteValues)
                            setOpenPopup(false)
                        }}>Save changes</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default MyNotesForm;