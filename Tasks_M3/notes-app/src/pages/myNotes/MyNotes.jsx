import React from "react";
import {Button, Card, CardContent, Grid, Typography} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import {NOTES, NOTES_COLUMNS} from "../../constants";
import Popup from "../../components/Popup"
import {styles} from "../../styles";
import MyNotesForm from "./MyNotesForm"


export const MyNotes = ({selectedNote, setNote, openPopup, setOpenPopup, changeNote, tableData}) => {
    const activeNote = tableData.find(note => note.id === selectedNote);
    return (
        <Grid container spacing={10}>
            <Grid container item xs={6} spacing={3}>
                <DataGrid rows={tableData} columns={NOTES_COLUMNS} pageSize={3} autoHeight={true}
                          onRowClick={(selectedItem) => setNote(selectedItem.row.id)} >
                </DataGrid>
            </Grid>
            <Grid container item xs={6} spacing={3}>
                <Card variant="outlined" style={styles.cardName}>
                    <CardContent>
                        <Typography color="textPrimary" variant={"h4"}>
                            {activeNote.title}
                        </Typography>
                        <Typography>
                            {activeNote.description}
                        </Typography>
                        <Typography>
                            <b>{activeNote.date}</b>
                        </Typography>
                        <hr/>
                        {activeNote.title !== "" &&
                        <Button className={"EditBtn"} variant="contained" color="primary" style={styles.EditBtn}
                                onClick={() => setOpenPopup(true)}>Edit note</Button>}
                    </CardContent>
                </Card>
                <Popup
                    title="Edit form"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}>
                    <MyNotesForm id={activeNote.id} onChange={changeNote} setOpenPopup={setOpenPopup}/>
                </Popup>
            </Grid>
        </Grid>
    );
}
