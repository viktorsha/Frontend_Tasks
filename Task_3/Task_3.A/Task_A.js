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
    const thead = table.createTHead();
    const row = thead.insertRow();
    for (let key of data) {
        const th = document.createElement("th");
        const text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        const row = table.insertRow();
        for (let key in element) {
            const cell = row.insertCell();
            const text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function checkStatuses() {
    console.log("Check started");
    const cells = document.getElementsByTagName("td");
    for (const cell of cells) {
        if (cell.innerHTML === STATUSES.pending) {
            cell.innerHTML = STATUSES.done;
            return;
        }
    }
    return STATUSES.end;
}

const table = document.querySelector("table");
const headerData = Object.keys(DOWNLOADS[0]);
generateTableHead(table, headerData);
generateTable(table, DOWNLOADS);

function statusChecker() {
    const INTERVAL = setInterval(function () {
        const result = checkStatuses(table)
        if (result === STATUSES.end)
            clearInterval(INTERVAL);
    }, 5000);
}
