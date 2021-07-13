const DOWNLOADS = [
    {
        id: 1,
        title: "Recipe",
        status: "Done"
    },
    {
        id: 2,
        title: "Workouts",
        status: "Pending"
    },
    {
        id: 3,
        title: "Passwords",
        status: "Pending"
    },
    {
        id: 4,
        title: "To Do 2021",
        status: "Pending"
    },
    {
        id: 5,
        title: "Books",
        status: "Failed"
    }
]

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function checkStatuses(table) {
    console.log("Check started")
    for (let row of table.rows) {
        for (let cell of row.cells) {
            if (cell.innerHTML === "Pending") {
                cell.innerHTML = "Done"
                return
            }
        }
    }
    return "end"
}

let table = document.querySelector("table");
let headerData = Object.keys(DOWNLOADS[0]);
generateTableHead(table, headerData);
generateTable(table, DOWNLOADS);

function runner() {
    var interval = setInterval(function () {
        var result = checkStatuses(table)
        if (result === "end")
            clearInterval(interval)
    }, 5000)
}
