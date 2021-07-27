import React, {useState} from "react";
import {Button, Grid, TextareaAutosize, TextField} from "@material-ui/core";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers"
import DateFnsUtils from '@date-io/date-fns';
import moment from "moment";
import {NOTES} from "../../constants";
import {styles, useStyle} from "../../styles";

export default function MyNotesForm({id, onChange, setOpenPopup}) {
    const activeNote = NOTES.find(note => note.id === id);
    const initialValues = {
        id: id,
        title: activeNote.title,
        description: activeNote.description,
        date: activeNote.date
    }

    const [values, setValues] = useState(initialValues);
    const classes = useStyle();
    const [inputValue, setInputValue] = useState(moment().format("dd.MM.yyyy"));

    const onDateChange = (date, value) => {
        setInputValue(value);
        setValues({
            ...values,
            ["date"]: inputValue
        })
    };

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    return (
        <div>
            <form className={classes.root}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField variant={"outlined"} label="Title" value={values.title} name="title"
                                   onChange={handleInputChange}/>
                        <TextareaAutosize className={"descriptionField"} variant={"outlined"} label="Description"
                                          name="description" value={values.description} style={styles.descriptionField}
                                          onChange={handleInputChange}/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker variant={"inline"} format={"dd.MM.yyyy"} inputValue={values.date}
                                                name="date" onChange={onDateChange} KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}/>
                        </MuiPickersUtilsProvider>
                        <Button variant={"outlined"}
                                color={"primary"}
                                className={"saveChangesBtn"}
                                style={styles.saveChangesBtn}
                                onClick={() => {
                            onChange(values)
                            setOpenPopup(false)
                        }}>Save changes</Button>
                    </Grid>
                </Grid>
            </form>

        </div>
    )
}