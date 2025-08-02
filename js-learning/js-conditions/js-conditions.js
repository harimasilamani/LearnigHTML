const enterNumber = document.getElementById("numberinput");
const weekdaysOutput = document.getElementsByClassName("weekdays")[0];

enterNumber.onblur = () => {
    switch (parseInt(enterNumber.value)) {
        case 1:
            weekdaysOutput.textContent = "Monday";
            break;
        case 2:
            weekdaysOutput.textContent = "Tuesday";
            break;
        case 3:
            weekdaysOutput.textContent = "Wednesday";
            break;
        case 4:
            weekdaysOutput.textContent = "Thursday";
            break;
        case 5:
            weekdaysOutput.textContent = "Friday";
            break;
        case 6:
            weekdaysOutput.textContent = "Saturday";
            break;
        case 7:
            weekdaysOutput.textContent = "Sunday";
            break;
        default:
            weekdaysOutput.textContent = " please enter the valid number"
            break;
    }
}

// if else
const inputMatrix = document.getElementById("matrixinput");
const logMatrix = document.getElementsByClassName("logmatrix")[0];

inputMatrix.onblur = () => {
    let size = parseInt(inputMatrix.value);
    let output = "";

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (row === col) {
                output += "*";
            } else if (row > col) {
                output += "*";
            } else {
                output += " ";
            }
        }
        output += "\n";
    }

    logMatrix.textContent = output;
}
