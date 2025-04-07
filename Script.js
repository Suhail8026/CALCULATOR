//2nd Script functiob

let display = document.getElementById("header"); // Get the input field

// Function to handle number and operator clicks
function fun(value) {
    if (display.value === "Error") 
    {
        display.value = "";
    }
    display.value += value;
}

// Function to clear all input (AC button)
function fun1() {
    display.value = "";
}

//Function to handle percentage calculation
function fun2() {
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}

// Function to handle backspace (BC button)
function fun3() {
    display.value = display.value.slice(0, -1);
}

// Function to handle division (preventing divide by zero)
function fun4(operator) {
    if (display.value === "Error") {
        display.value = "";
    }
    if (display.value.length > 0 && display.value[display.value.length - 1] !== operator) {
        display.value += operator;
    }
}

// Function to handle multiplication 
function fun5(operator) {
    if (display.value === "Error") {
        display.value = "";
    }
    if (display.value.length > 0 && display.value[display.value.length - 1] !== operator) {
        display.value += operator;
    }
}

// Function to handle Subtraction 
function fun6(operator) {
    if (display.value === "Error") {
        display.value = "";
    }
    if (display.value.length >= 0 && display.value[display.value.length - 1] !== operator) {
        display.value += operator;
    }
}

// Function to handle Addition 
function fun7(operator) {
    if (display.value === "Error") {
        display.value = "";
    }
    if (display.value.length > 0 && display.value[display.value.length - 1] !== operator) {
        display.value += operator;
    }
}

// Function to handle division (preventing divide by zero)
function fun8(operator) {
    if (display.value === "Error") {
        display.value = "";
    }
    if (display.value.length >= 0 && display.value[display.value.length - 1] !== operator) {
        display.value += operator;
    }
}

// Function to handle single 0
function fun10(singlezero) {
    if (display.value === "Error") {
        display.value = "";
    }
    if (display.value.length = 0 && display.value[display.value.length - 1] !== singlezero) {
        display.value += singlezero;
    }
    if(display.value === "0"){
        display.value = "0";
    }
    else{
        display.value += singlezero;
    }
}

//function to handle double 0
function fun9(doublezero) {
    if(display.value === "" || display.value === "0") {
        display.value = "0";
    }
    else{
        display.value += doublezero;
    }
}
// Function to calculate result
function result() {
    try {
        let expression = display.value.replace(/x/g, '*'); // Replace 'x' with '*' for multiplication
        expression = expression.replace(/\b0([1-9])/g, '$1'); // remove leading zeroes

        let output = (eval(expression)); // Evaluate expression

        if (!isFinite(output)) { // Handle divide by zero and other invalid cases
            throw new Error("Math Error");
        }
        display.value = output;
    } catch (error) {
        display.value = "Expression error";
    }
}























