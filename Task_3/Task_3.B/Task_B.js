function updateInput(fromInput, toInput) {
    toInput.value = fromInput.value;
}

let timeout = setTimeout(function () {
}, 0);

function updateOnTimeout(fromInput, toInput) {
    clearTimeout(timeout);
    timeout = setTimeout(updateInput, 1000, fromInput, toInput);
}