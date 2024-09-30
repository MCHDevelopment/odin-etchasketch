function createArea(numberOfRows) {
    const scratchArea = document.querySelector("#scratchArea");

    for (let i = 0; i < numberOfRows; i++) {
        scratchArea.appendChild(createRow(numberOfRows));
    }
}

function createRow(numberOfFields) {

    const scratchRow = document.createElement("div");
    scratchRow.classList.add("scratchRow");

    for (let i = 0; i < numberOfFields; i++) {
        scratchRow.appendChild(createField(numberOfFields));
    }

    return scratchRow;
}

function createField() {
    const scratchField = document.createElement("div");
    scratchField.classList.add("scratchField");
    return scratchField;
}

createArea(16);