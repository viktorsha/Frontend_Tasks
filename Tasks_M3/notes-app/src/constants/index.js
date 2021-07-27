import React from "react";
import dateFormat from "dateformat";

export const NOTES_COLUMNS = [
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

export const NOTES = [
    {
        id: 1,
        title: "JS learning",
        description: "JavaScript (often shortened to JS) is a lightweight, interpreted, " +
            "object-oriented language with first-class functions, and is best known as the scripting language for Web pages," +
            " but it's used in many non-browser environments as well. ",
        date: dateFormat(new Date(), "dd.mm.yyyy")
    },
    {
        id: 2,
        title: "React learning",
        description: "React is a library for building composable user interfaces. " +
            "It encourages the creation of reusable UI components, which present data that changes over time",
        date: dateFormat(new Date(), "dd.mm.yyyy")
    },
    {
        id: 3,
        title: "HTML+CSS learning",
        description: "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of " +
            "the core technologies for building Web pages. HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.",
        date:dateFormat(new Date(), "dd.mm.yyyy")
    }
]
