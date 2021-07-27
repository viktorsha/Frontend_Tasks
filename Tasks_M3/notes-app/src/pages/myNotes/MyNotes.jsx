import React from "react";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";
import {DataGrid} from "@material-ui/data-grid";
import {NOTES, NOTES_COLUMNS} from "../../constants";
import styles from "../../styles";


export const MyNotes = ({selectedNote, setNote}) => {
    const activeNote = NOTES.find(note => note.id === selectedNote);
    return (
        <Grid container spacing={10}>
            <Grid container item xs={6} spacing={3}>
                <DataGrid rows={NOTES} columns={NOTES_COLUMNS} pageSize={3} autoHeight={true}
                          onRowClick={(selectedItem) => setNote(selectedItem.row.id)}>
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
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
