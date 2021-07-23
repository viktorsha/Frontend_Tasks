import './App.css';
import React, {useState} from "react";
import {DataGrid} from "@material-ui/data-grid";
import myNotes from "./pages/myNotes/myNotes";
import PropTypes from "prop-types";
import {Card, CardContent, Grid, Typography} from "@material-ui/core";

function App() {
    const styles = {
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
        }
    }
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 100
        },
        {
            field: "title",
            headerName: "Title",
            width: 140
        },
        {
            field: "description",
            headerName: "Description",
            width: 164
        },
        {
            field: "date",
            headerName: "Creation date",
            width: 120
        },
    ]
    const rows = [
        new myNotes(1, "JS learning", "JavaScript (often shortened to JS) is a lightweight, interpreted, " +
            "object-oriented language with first-class functions, and is best known as the scripting language for Web pages," +
            " but it's used in many non-browser environments as well. ", new Date().toDateString()),
        new myNotes(2, "React learning", "React is a library for building composable user interfaces. " +
            "It encourages the creation of reusable UI components, which present data that changes over time", new Date().toDateString()),
        new myNotes(3, "HTML+CSS learning", "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of " +
            "the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.",
            new Date().toDateString())
    ]

    const [selectedNote, setSelectedNote] = useState(new myNotes(1, "", "Select note to display", ""));
    React.useEffect(() => {
        localStorage.setItem("Notes", JSON.stringify(rows));
    }, [rows])

    return (
        <Grid container spacing={10}>
            <Grid container item xs={6} spacing={3}>
                <DataGrid rows={rows} columns={columns} pageSize={3} autoHeight={true} isCellEditable={(params) => true}
                          onRowClick={(selectedItem) =>
                              setSelectedNote(new myNotes(selectedItem.row.id, selectedItem.row.title, selectedItem.row.description, selectedItem.row.date))}>
                </DataGrid>
            </Grid>
            <Grid container item xs={6} spacing={3}>
                <Card variant="outlined" style={styles.cardName}>
                    <CardContent>
                        <Typography color="textPrimary" variant={"h4"}>
                            {selectedNote.title}
                        </Typography>
                        <Typography>
                            {selectedNote.description}
                        </Typography>
                        <Typography>
                            <b>{selectedNote.date}</b>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

App.propTypes = {
    row: PropTypes.array,
    columns: PropTypes.array,
    styles: PropTypes.object

}

export default App;
