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
];
const STATUSES = {pending: "Pending", done: "Done", failed: "Failed", end: "End"};

function generateTableHead(table, data) {
    const THEAD = table.createTHead();
    const ROW = THEAD.insertRow();
    for (let key of data) {
        const TH = document.createElement("th");
        const TEXT = document.createTextNode(key);
        TH.appendChild(TEXT);
        ROW.appendChild(TH);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        const ROW = table.insertRow();
        for (let key in element) {
            const CELL = ROW.insertCell();
            const TEXT = document.createTextNode(element[key]);
            CELL.appendChild(TEXT);
        }
    }
}

function checkStatuses() {
    console.log("Check started");
    const CELLS = document.getElementsByTagName("td");
    for (const cell of CELLS) {
        if (cell.innerHTML === STATUSES.pending) {
            cell.innerHTML = STATUSES.done;
            return;
        }
    }
    return STATUSES.end;
}

const TABLE = document.querySelector("table");
const HEADERDATA = Object.keys(DOWNLOADS[0]);
generateTableHead(TABLE, HEADERDATA);
generateTable(TABLE, DOWNLOADS);

function statusChecker() {
    const INTERVAL = setInterval(function () {
        const RESULT = checkStatuses(TABLE)
        if (RESULT === STATUSES.end)
            clearInterval(INTERVAL);
    }, 5000);
}
