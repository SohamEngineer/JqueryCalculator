$(document).ready(function () {
    let result = 0;
    let previousEntry = 0;
    let currentEntry = "0";
    let operation = null;

    const pi = Math.PI;

    $(".button").on('click', function () {
        let buttonPressed = $(this).html();
        console.log(buttonPressed);

        if (buttonPressed === "C") {
            result = 0;
            currentEntry = "0";
            operation = null;
        }
        else if (buttonPressed === "CE") {
            currentEntry = "0";
        }
        else if (buttonPressed === "Back") {
            currentEntry = currentEntry.slice(0, -1) || "0";
        }

        else if (buttonPressed === "%") {
            currentEntry = (parseFloat(currentEntry) / 100);
        }
        else if (buttonPressed=== "1/x"){
            currentEntry = (1 /  parseFloat(currentEntry))
        }
        else if (buttonPressed ==="√"){
            currentEntry= Math. sqrt(parseFloat(currentEntry))
        }

        else if(buttonPressed === "π"){
            currentEntry = pi.toString();
        }
else if (buttonPressed=== "+" || buttonPressed=== "*" || buttonPressed=== "/" || buttonPressed=== "-" ){
previousEntry= parseFloat(currentEntry)
operation=buttonPressed;
currentEntry="0"
}

        else if(buttonPressed === "="){
            if(operation === "+"){
                currentEntry = (previousEntry + parseFloat(currentEntry)).toString();
            }
            else if(operation === "-"){
                currentEntry = (previousEntry - parseFloat(currentEntry)).toString();
            }
            else if(operation === "*"){
                currentEntry = (previousEntry * parseFloat(currentEntry)).toString();
            }
            else if(operation === "/"){
                currentEntry = (previousEntry / parseFloat(currentEntry)).toString();
            }
            operation = null;
        }
        else {
            if(currentEntry === "0"){
                currentEntry = buttonPressed;
            } else {
                currentEntry += buttonPressed;
            }
        }

        // Update the display after each button press
        $("#display").val(currentEntry);
    });
});
