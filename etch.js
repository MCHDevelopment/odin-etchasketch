function prepareButton() {
    const restartButton = document.querySelector("#restartButton");
    restartButton.addEventListener("click", userFieldInput);
}

function userFieldInput() {
    let fieldSize = prompt("Please enter the dimensions of the new field (1 - 100)");
    if (validateInput(fieldSize)) {
        createArea(fieldSize);
    } else {
        alert("Invalid value entered - please try again");
        userFieldInput();
    }
}

function validateInput(userInput) {
    let isValid = true;

    if (userInput == null || userInput == "") {
        isValid = false;
    } else {
        userInput = parseInt(userInput);

        if (userInput == "NaN") {
            isValid = false;
        } else {
            if((userInput < 1) || (userInput > 100)){
                isValid = false;
            }
        }
    }

    return isValid;
}

function createArea(numberOfRows) {
    const scratchArea = document.querySelector("#scratchArea");

    scratchArea.innerHTML = "";

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

    scratchField.addEventListener("mouseenter", () => {
        scratchField.classList.add("scratchedField");
    });

    return scratchField;
}

prepareButton();
createArea(16);